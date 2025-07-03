export const FORM_STEPS = [
  { id: 1, title: 'Personal', icon: 'FaUser' },
  { id: 2, title: 'Contact', icon: 'MdEmail' },
  { id: 3, title: 'Identity', icon: 'FaIdCard' },
  { id: 4, title: 'Account', icon: 'MdAccountBalance' },
  { id: 5, title: 'Review', icon: 'FaCheck' }
];

export const ACCOUNT_TYPES = [
  { value: 'savings', label: 'Savings Account' },
  { value: 'checking', label: 'Checking Account' },
  { value: 'business', label: 'Business Account' },
  { value: 'student', label: 'Student Account' }
];

export const ID_TYPES = [
  { value: 'passport', label: 'Passport' },
  { value: 'drivers-license', label: 'Driving License' },
  { value: 'national-id', label: 'National ID' },
  { value: 'other', label: 'Other Government ID' }
];

export const INITIAL_FORM_DATA = {
  personal: {
    firstName: '',
    lastName: '',
    dob: '',
    gender: 'male'
  },
  contact: {
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  },
  identity: {
    idType: 'passport',
    idNumber: '',
    idFront: null,
    idBack: null,
    selfie: null
  },
  account: {
    accountType: 'savings',
    initialDeposit: '',
    password: '',
    confirmPassword: ''
  },
  terms: false
};