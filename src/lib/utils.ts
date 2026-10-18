import { createCn } from "cn/config";

export const cn = createCn({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "preset-1",
            "preset-2-bold",
            "preset-2-regular",
            "preset-3-bold",
            "preset-3-medium",
            "preset-3-regular",
            "preset-4",
            "preset-5-medium",
            "preset-5-regular",
            "preset-6",
          ],
        },
      ],
    },
  },
});
