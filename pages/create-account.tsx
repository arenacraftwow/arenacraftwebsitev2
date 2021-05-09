import { TextField } from "components/ui/TextField";
import React, { useRef, useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';
import { requireNotNull } from "utils";
import { toast } from 'react-toastify';
import { userService } from "service/userService";
import { Labeled } from "components/ui/Labeled";
import { Button } from "components/ui/Button";

function bindText(value: string, setter: (next: string) => void) {
    return {
        onChange(e: { target: { value: string } }) {
            setter(e.target.value.trim())
        },
        value: value
    }
}

export default function CreateAccountPage() {
    const [username, setUsername] = useState('');
    const [usernameErr, setUserNameErr] = useState('');
    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [captcha, setCaptcha] = useState<string | null>(null);
    const [captchaErr, setCaptchaErr] = useState<string>('');
    const captchaRef = useRef<ReCAPTCHA | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function resetForm() {
        setPassword('');
        setConfirmPassword('');
        setCaptcha(null);
        captchaRef.current?.reset();
    }

    async function submitHandler(e: React.FormEvent) {
        e.preventDefault();
        setUserNameErr('');
        setPasswordErr('');
        setCaptchaErr('');

        let hasErr = false;
        if (!/^[a-zA-Z0-9_-]{4,16}$/.test(username)) {
            setUserNameErr('Username must be between 4, 16 characters long and contain only letters and numbers, no spaces.');
            hasErr = true;
        }

        if (password.length <= 6 || password.length > 16) {
            setPasswordErr('Invalid password length. Must be between 6, and 16 characters long');
            hasErr = true;
        }

        if (password !== confirmPassword) {
            setPasswordErr(`Passwords don't match.`);
            hasErr = true;
        }

        if (captcha === null || captcha.trim() === '') {
            hasErr = true;
            setCaptchaErr('Captcha must be solved.')
        }

        if (hasErr) {
            return;
        }

        setIsSubmitting(true);

        const resp = await userService.createUser({
            username,
            password,
            reCaptchaKey: requireNotNull(captcha)
        });

        switch (resp.type) {
            case 'Ok':
                toast(<>
                    Account <i>{username}</i> created successfully.
                </>, { type: 'success', autoClose: false });
                resetForm();
                break;
            case 'InvalidCaptchaCode':
                setCaptchaErr('Captcha outdated, try again');
                break;
            case 'UsernameTaken':
                setUserNameErr('Username is already taken');
                break;
        }

        setIsSubmitting(false);

    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <TextField
                    label='Username'
                    inputProps={{
                        type: 'text',
                        ...bindText(username, setUsername)
                    }}
                    hasError={usernameErr.length > 0}
                    helper={usernameErr}
                />
                <TextField
                    label='Password'
                    inputProps={{
                        type: 'password',
                        ...bindText(password, setPassword),
                    }}
                    hasError={passwordErr.length > 0}
                    helper={passwordErr}
                />
                <TextField
                    label='Confirm password'
                    inputProps={{
                        type: 'password',
                        ...bindText(confirmPassword, setConfirmPassword)
                    }}
                />
                <Labeled
                    label='Captcha'
                    helper={captchaErr}
                    hasError={captchaErr.length > 0}
                >
                    <ReCAPTCHA
                        onChange={next => {
                            setCaptcha(next);
                        }}
                        sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
                        theme='dark'
                        size='normal'
                        ref={captchaRef}
                    />
                </Labeled>

                <Button buttonProps={{ disabled: isSubmitting }} >SIGN UP</Button>
            </form>
        </div>
    );
}