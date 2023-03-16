module.exports = class UserDto {
    email;
    city;
    id;
    isActivated;
    name;
    photo;
    about;

    constructor(model) {
        this.email = model.email
        this.city = model.city
        this.name = model.name
        this.id = model._id
        this.isActivated = model.isActivated
        this.photo = model.photo
        this.about = model.about
    }
}