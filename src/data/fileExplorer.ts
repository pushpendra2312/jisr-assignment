import { ItemType, Folder } from "../types/types";

export const FILES_DATA: Folder = {
  type: ItemType.Folder,
  name: "parent",
  data: [
    {
      type: ItemType.Folder,
      name: "root",
      data: [
        {
          type: ItemType.Folder,
          name: "src",
          data: [
            {
              type: ItemType.File,
              meta: "js",
              name: "index.js",
            },
          ],
        },
        {
          type: ItemType.Folder,
          name: "public",
          data: [
            {
              type: ItemType.File,
              meta: "ts",
              name: "index.ts",
            },
          ],
        },
        {
          type: ItemType.File,
          meta: "html",
          name: "index.html",
        },
        {
          type: ItemType.Folder,
          name: "data",
          data: [
            {
              type: ItemType.Folder,
              name: "images",
              data: [
                {
                  type: ItemType.File,
                  meta: "img",
                  name: "image.png",
                },
                {
                  type: ItemType.File,
                  meta: "img",
                  name: "image2.webp",
                },
              ],
            },
            {
              type: ItemType.File,
              meta: "svg",
              name: "logo.svg",
            },
          ],
        },
        {
          type: ItemType.File,
          meta: "css",
          name: "style.css",
        },
      ],
    },
  ],
};
