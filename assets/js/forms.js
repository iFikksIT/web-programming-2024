$("#contactForm").validate({
    rules: {
        message: {
            required: true,
            minLength: 5
        },
        name:  {
            required: true,
            minLength: 5
        }
    }
});