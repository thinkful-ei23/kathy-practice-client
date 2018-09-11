export const required = value => value ? undefined : 'This is required, otherwise I won\'t know who you are.';

export const nonEmpty = value => value.trim() !== '' ? undefined : 'This field cannot be empty or have just spaces. Please try again.';

export const isAllDigits = value => value.length === 4 ? undefined : 'Please enter the 4 digit code your teacher gave you.';

// export const isAllDigits = value => value !== (/[0-9]/.test(value))  ? undefined : 'Please enter the 4 digit code your teacher gave you.';