const mongoose = require("mongoose");

const ProjectsSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: [true, "Please add a title."],
            unique: false,
            trim: true,
            maxlength: [40, "Title cannot be more then 40 character lenght"]
        },
        supTitle:{
            type: String,
            required: false,
            unique: false,
            maxlength: [80, "SupTitle cannot be more then 80 character lenght"]
        },
        description:{
            type: String,
            required: [true, "Please add a description."],
            unique: false,
            maxlength: [300, "Description cannot be more then 300 character lenght"]
        },
        technologies:{
            type: String,
            required: [true, "Please add a tech stack."],
            unique: false,
            maxlength: [200, "Tech stack cannot be more then 200 character lenght"]
        },
        releaseDate:{
            type: Date, 
            default: Date.now
        }
    }
)

module.exports = mongoose.models.Projects || mongoose.model('Projects', ProjectsSchema);