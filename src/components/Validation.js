export default function (values) {
    const errors = {};

    if (!values.country ) {
        errors.country = 'Please enter a country'
    }

    if (!values.language ) {
        errors.language = 'Please enter the languages you are fluent in'
    }

    if (!values.licence ) {
        errors.licence = 'Answer with yes or no'
    }

    if (!values.hobbies ) {
        errors.hobbies = 'Please enter a value'
    }

    return errors;
}