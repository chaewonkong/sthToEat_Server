// resolverMap.ts
import { IResolvers } from "graphql-tools";

interface IDish {
  name: string;
  imgUrl: string;
}

const FAKE_DISHES = [
  {
    name: "마라탕",
    imgUrl:
      "http://img1.tmon.kr/cdn3/deals/2019/05/24/2099407062/original_2099407062_front_935dc_1558688230production.jpg"
  },
  {
    name: "삼겹살",
    imgUrl:
      "https://img.kbs.co.kr/kbs/620/nsimg.kbs.co.kr/data/news/2017/03/02/3437825_AXD.png"
  },
  {
    name: "족발",
    imgUrl: "http://sikdorak365.co.kr/web/upload/NNEditor/20180607/jok01.jpg"
  }
];

const resolverMap: IResolvers = {
  Query: {
    foods(_: void, args: void): IDish[] {
      return FAKE_DISHES;
    }
  }
};
export default resolverMap;
