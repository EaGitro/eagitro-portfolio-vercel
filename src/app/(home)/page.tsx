import Image from "next/image";
import SideMenu from "~/components/my-components/SideMenu"
import PageLayoutComp from "~/components/my-components/PageLayoutComp";
import LongLorem from "~/common/utils/LongLorem";

export default function Home() {
  // let lorem = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>";
  // let lorems = "";

  // for(let i=0;i<=16;i++){
  //   lorems+=lorem;
  // }



  return (
    <>

      <div>{LongLorem(12)}
      </div>
    </>
  );
}
