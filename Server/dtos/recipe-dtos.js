module.exports = class RecipeDto {
    name;
    shortDesc;
    mainPhoto;
    category;
    time;
    desc;
    video;
    count;
    id;


    constructor(model) {
        this.name = model.name
        this.shortDesc = model.shortDesc
        this.mainPhoto = model.mainPhoto
        this.category = model.category
        this.time = model.time
        this.desc = model.desc
        this.video = model.video
        this.count = model.count
        this.id = model._id
    }
}