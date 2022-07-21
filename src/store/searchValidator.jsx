import * as Yup from "yup";


const english = /^[A-Za-z]+$/;

const searchValidator = Yup.object().shape({
    name: Yup.string().matches(english, "Only English letters"),
    country: Yup.string().matches(english, "Only English letters"),
});

export default searchValidator