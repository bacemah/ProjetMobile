<?php

namespace App\Mail;

use App\Models\User;
use App\Models\Client;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Contracts\Queue\ShouldQueue;

class EmailVerification extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public $User;
    public $number;
    public function __construct(User $user, $number)
    {

        $this->User = $user;
        $this->number = $number;
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: 'Code de validation',
        );
    }




    /** 
     *  @return \Illuminate\Mail\Mailables\Content
     */

    public function content()
    {
        return new Content(
            markdown: 'mail.email-verification',
            with: ['first_name' => $this->User->first_name, 'last_name' => $this->User->last_name, 'number' => $this->number],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }
}
