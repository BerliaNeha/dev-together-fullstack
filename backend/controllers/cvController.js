import UserDeveloper from "../models/userDeveloper";

export const updateCV = async (req, res, next) => {
    const currentUserId = req.params.id;
    const cvId = req.body._id;
    try {
      let user = await UserDeveloper.findById(mongoose.Types.ObjectId(currentUserId));
      console.log(user);
      if (user.albums.includes(albumId)) {
        return next(
          new createHttpError[409]("Album already exists in your list of albums")
        );
      }
  
      user.albums = [...user.albums, albumId];
      user.save();
      res.status(201).json(user.albums);
    } catch (error) {
      console.log(error);
      return next(new createHttpError[500]("Error updating user's albums"));
    }
  };
  