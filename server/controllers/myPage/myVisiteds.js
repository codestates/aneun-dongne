const { Visited, User, Sequelize } = require("../../models");

// 포스트 contentId를 가지고 모든 댓글 목록 불러오기

const createMyVisited = async (userId, area, sigg, mapx, mapy, memo, imagePath, thumbnailPath) => {
  await Visited.create({
    visited_area: area,
    visited_sigg: sigg,
    visited_mapx: mapx,
    visited_mapy: mapy,
    visited_memo: memo,
    visited_memo_image_path: imagePath,
    visited_thumbnail_path: thumbnailPath,
    visited_user_id: userId,
  });
};

const updateMyVisited = async (visitedId, userId, area, sigg, mapx, mapy, memo, imagePath, thumbnailPath) => {
  await Visited.update(
    {
      visited_area: area,
      visited_sigg: sigg,
      visited_mapx: mapx,
      visited_mapy: mapy,
      visited_memo: memo,
      visited_memo_image_path: imagePath,
      visited_thumbnail_path: thumbnailPath,
      visited_user_id: userId,
    },
    { where: { id: visitedId } }
  );
};

const deleteMyVisited = async (userId, visitedId) => {
  await Visited.destroy({
    where: {
      id: visitedId,
      visited_user_id: userId,
    },
  });
};

const getMyVisiteds = async (userId) => {
  let result = [];
  await Visited.findAll({
    raw: true,
    where: { visited_user_id: userId },
    order: [["createdAt", "DESC"]],
  }).then((data) => {
    result = data;
  });
  return result;
};

// const bb = async () => {
//   console.log(await getMyComments(1));
// };

// bb();

module.exports = {
  readVisiteds: async (req, res) => {
    const accessTokenData = isAuthorized(req);
    try {
      if (!accessTokenData) {
        await res.status(400).json({ data: null, message: "invalid access token" });
      } else {
        const { id } = accessTokenData;
        await res.status(200).json({ data: await getMyVisiteds(id) });
      }
    } catch (err) {
      res.status(500).json({ message: "server err" });
    }
  },
  createVisited: async (req, res) => {
    const accessTokenData = isAuthorized(req);
    try {
      if (!accessTokenData) {
        await res.status(400).json({ data: null, message: "invalid access token" });
      } else {
        const { id } = accessTokenData;
        const { area, sigg, mapx, mapy, memo } = req.body;

        if (!req.file) {
          console.log("이미지 없음");
          await createMyVisited(id, area, sigg, mapx, mapy, memo, null, null);
          await res.status(200).json({ data: await getMyVisiteds(id) });
        }

        //s3 서버에 저장된 이미지의 url 경로 획득
        const imagesInfo = req.file.transforms;
        let imagePath = "";
        let thumbnailPath = "";

        imagesInfo.forEach((imageInfo) => {
          if (imageInfo.id === "thumbnail") thumbnailPath = imageInfo.location;
          else if (imageInfo.id === "origin") imagePath = imageInfo.location;
        });

        if (imagePath === "" || thumbnailPath === "") {
          await createMyVisited(id, area, sigg, mapx, mapy, memo, null, null);
          await res.status(200).json({ data: await getMyVisiteds(id), message: "Image upload failed" });
        } else {
          await createMyVisited(id, area, sigg, mapx, mapy, memo, imagePath, thumbnailPath);
          await res.status(200).json({ data: await getMyVisiteds(id) });
        }
      }
    } catch (err) {
      res.status(500).json({ message: "server err" });
    }
  },
  updateVisited: async (req, res) => {
    const accessTokenData = isAuthorized(req);
    try {
      if (!accessTokenData) {
        await res.status(400).json({ data: null, message: "invalid access token" });
      } else {
        const { id } = accessTokenData;
        const { area, sigg, mapx, mapy, memo } = req.body;
        const { visitedId } = req.query;

        if (!req.file) {
          console.log("이미지 없음");
          await updateMyVisited(visitedId, id, area, sigg, mapx, mapy, memo, null, null);
          await res.status(200).json({ data: await getMyVisiteds(id) });
        }

        //s3 서버에 저장된 이미지의 url 경로 획득
        const imagesInfo = req.file.transforms;
        let imagePath = "";
        let thumbnailPath = "";

        imagesInfo.forEach((imageInfo) => {
          if (imageInfo.id === "thumbnail") thumbnailPath = imageInfo.location;
          else if (imageInfo.id === "origin") imagePath = imageInfo.location;
        });

        if (imagePath === "" || thumbnailPath === "") {
          await updateMyVisited(visitedId, id, area, sigg, mapx, mapy, memo, null, null);
          await res.status(200).json({ data: await getMyVisiteds(id), message: "Image upload failed" });
        } else {
          await updateMyVisited(visitedId, id, area, sigg, mapx, mapy, memo, imagePath, thumbnailPath);
          await res.status(200).json({ data: await getMyVisiteds(id) });
        }
      }
    } catch (err) {
      res.status(500).json({ message: "server err" });
    }
  },
  deleteVisited: async (req, res) => {
    const accessTokenData = isAuthorized(req);
    try {
      if (!accessTokenData) {
        await res.status(400).json({ data: null, message: "invalid access token" });
      } else {
        const { id } = accessTokenData;
        const { visitedId } = req.query;
        await deleteMyVisited(id, visitedId);
        await res.status(200).json({ data: await getMyVisiteds(id) });
      }
    } catch (err) {
      res.status(500).json({ message: "server err" });
    }
  },
};
