@component('mail::message')
# New Application Awaiting Approval


@component('mail::table')
|                |                    |
|----------------|--------------------|
| **Name**:      | {{ $user->name }}  |
| **Email**:     | {{ $user->email }} |
| **Country**:   | {{ $user->country }} |
| **Contact No**:| {{ $user->phone }} |
@endcomponent

@if($user->additionalInfo)
@component('mail::panel')
**Reason for Application:**

{{ $user->additionalInfo }}
@endcomponent
@endif

@component('mail::button', ['url' => $approveUrl, 'color' => 'success'])
Approve Applicant
@endcomponent

@component('mail::button', ['url' => $declineUrl, 'color' => 'error'])
Decline Applicant
@endcomponent

Thanks,
{{ config('app.name') }}
@endcomponent
