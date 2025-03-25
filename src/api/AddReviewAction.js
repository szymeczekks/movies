const Storage = {
    get(key) {
        return localStorage[key] ? JSON.parse(localStorage[key]) : {};
    },

    set(data, key) {
        try {
            localStorage[key] = JSON.stringify(data);
        } catch(err) {
            console.error(err);
        }
    }
}

function validate(data) {
    const errors = {};

    if (!data.author) {
        errors.author = {
            EN: 'Name is required',
            PL: 'Imię jest wymagane'
        };
    }

    if (!data.email) {
        errors.email = {
            EN: 'Email is required',
            PL: 'Email jest wymagany'
        };
    }

    if (!data.content) {
        errors.content = {
            EN: 'Review is required',
            PL: 'Recenzja jest wymagana'
        };
    }

    if (!data.rating) {
        errors.rating = {
            EN: 'Rating is required',
            PL: 'Ocena jest wymagana'
        };
    }

    return errors;
}

export async function addReviewAction({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const errors = validate(data);

    console.log(data);

    if (Object.keys(errors).length) {
        return { errors };
    }

    const reviews = Storage.get('reviews');

    if (!reviews[`reviews_${data.movie_id}`]) {
        reviews[`reviews_${data.movie_id}`] = [];
    }

    if (data.consent && data.consent === 'true') {
        Storage.set({ name: data.author }, 'userData');
    }

    data.date = new Date().toISOString().split('T')[0];

    reviews[`reviews_${data.movie_id}`].push(data);
    Storage.set(reviews, 'reviews');
    return { data: reviews };
}