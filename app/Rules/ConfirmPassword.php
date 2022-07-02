<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class ConfirmPassword implements Rule
{   
    public $password;
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($var1)
    {
        $this->password = $var1;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $out = new \Symfony\Component\Console\Output\ConsoleOutput();
        $out->writeln($this->password);
        return false;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The validation error message.';
    }
}
