const { pool } = require("../config/db");
const redis = require("../config/redis");

module.exports = {
  getAllUsers: async (req, res) => {
    // let page = parseInt(req.query.page) || 1;
    // let limit = parseInt(req.query.limit) || 10;
    // let offset = (page - 1) * limit;
    // try {
    //   //   const cache = await redis.get("users");
    //   //   if (cache) {
    //   //     return res.status(200).json({ data: JSON.parse(cache) });
    //   //   }

    //   // thêm .promise()
    //   const [rows] = await pool
    //     .promise()
    //     .query(`SELECT * FROM users LIMIT ${limit} OFFSET ${offset};`);
    //   const [[{ total }]] = await pool
    //     .promise()
    //     .query("SELECT COUNT(*) as total FROM users");

    //   if (rows && rows.length > 0) {
    //     // await redis.setEx("users", 60, JSON.stringify(rows));
    //     return res.status(200).json({
    //       message: "success",
    //       status: 200,
    //       data: rows,
    //       length: total,
    //       page: page,
    //       limit: limit,
    //       offset: offset,
    //       totalPages: Math.ceil(total / limit),
    //     });
    //   }
    //   return res.status(400).json({ message: "No user found" });
    // } catch (error) {
    //   console.error(error);
    //   return res.status(500).json(error);
    // }
    try {
      //   const cached = userCache.get("users");
      //   if (cached) return res.status(200).json({ data: cached });

      const [rows] = await pool.promise().query("SELECT * FROM users");
      //   userCache.set("users", rows);
      return res.status(200).json({ length: rows.length, data: rows });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
