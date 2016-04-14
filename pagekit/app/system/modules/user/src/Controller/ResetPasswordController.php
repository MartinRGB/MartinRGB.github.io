<?php

namespace Pagekit\User\Controller;

use Pagekit\Application as App;
use Pagekit\Application\Exception;
use Pagekit\User\Model\User;

class ResetPasswordController
{

    public function indexAction()
    {
        if (App::user()->isAuthenticated()) {
            return App::redirect();
        }

        return [
            '$view' => [
                'title' => __('Reset'),
                'name'  => 'system/user/reset-request.php',
            ],
            'error' => ''
        ];
    }

    /**
     * @Request({"email": "string"})
     */
    public function requestAction($email)
    {
        try {

            if (App::user()->isAuthenticated()) {
                return App::redirect();
            }

            if (!App::csrf()->validate()) {
                throw new Exception(__('Invalid token. Please try again.'));
            }

            if (empty($email)) {
                throw new Exception(__('Enter a valid email address.'));
            }

            if (!$user = User::findByEmail($email)) {
                throw new Exception(__('Unknown email address.'));
            }

            if ($user->isBlocked()) {
                throw new Exception(__('Your account has not been activated or is blocked.'));
            }

            $user->activation = App::get('auth.random')->generateString(32);

            $url = App::url('@user/resetpassword/confirm', ['user' => $user->username, 'key' => $user->activation], 0);

            try {

                $mail = App::mailer()->create();
                $mail->setTo($user->email)
                     ->setSubject(__('Reset password for %site%.', ['%site%' => App::module('system/site')->config('title')]))
                     ->setBody(App::view('system/user:mails/reset.php', compact('user', 'url', 'mail')), 'text/html')
                     ->send();

            } catch (\Exception $e) {
                throw new Exception(__('Unable to send confirmation link.'));
            }

            $user->save();

            return [
                'message' => __('Check your email for the confirmation link.')
            ];

        } catch (Exception $e) {
            App::abort(400, $e->getMessage());
        }
    }

    /**
     * @Request({"user", "key"})
     */
    public function confirmAction($username = "", $activation = "")
    {
        if (empty($username) || empty($activation) || !$user = User::where(compact('username', 'activation'))->first()) {
            return $this->messageView(__('Invalid key.'), $success = false);
        }

        if ($user->isBlocked()) {
            return $this->messageView(__('Your account has not been activated or is blocked.'), $success = false);
        }

        $error = '';

        if ('POST' === App::request()->getMethod()) {

            try {

                if (!App::csrf()->validate()) {
                    throw new Exception(__('Invalid token. Please try again.'));
                }

                $password = App::request()->request->get('password');

                if (empty($password)) {
                    throw new Exception(__('Enter password.'));
                }

                if ($password != trim($password)) {
                    throw new Exception(__('Invalid password.'));
                }

                $user->password = App::get('auth.password')->hash($password);
                $user->activation = null;
                $user->save();

                App::message()->success(__('Your password has been reset.'));

                return App::redirect('@user/login');

            } catch (Exception $e) {
                $error = $e->getMessage();
            }
        }

        return [
            '$view' => [
                'title' => __('Reset Confirm'),
                'name'  => 'system/user/reset-confirm.php'
            ],
            'username' => $username,
            'activation' => $activation,
            'error' => $error
        ];
    }

    protected function messageView($message, $success = true)
    {
        return AuthController::messageView([
            'title' => __('Reset password'),
            'message' => $message,
            'success' => $success
        ]);
    }
}
