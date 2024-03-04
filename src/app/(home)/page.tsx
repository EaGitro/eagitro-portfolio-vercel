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

      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Ea Gitro
        </h1>
        <div className="float-right m-2 w-36">
          <Image src={"/eagitro-kotlin.png"} alt="EaGitro's icon" width={150} height={150}>
          </Image>
          <p className="text-sm mb-0.5">(↑ magnificent artwork by こっとりー.)</p>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {`Hey! I'm Ea Gitro. I'm a student, who want to be an engineer.`}
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I speak Japanese and English(non-native). he/him.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I love creating something, and deep-driving anything!
        </p>
      </div>
      <div className="grid grid-cols-3 mt-20 gap-4 content-center items-center">
        <Image src={"/ea-default.png"} alt="ea's default icon" width={120} height={120} className=""></Image>
        <div className="col-span-2 grid grid-rows-3">


          <a href="https://github.com/EaGitro">
            <div className="flex">
              <Image src="github-mark.svg" alt="github mark" width={24} height={23} className="block shrink m-2"></Image><p className="grow m-2">@EaGitro</p>
            </div>
          </a>

          <a href="https://atcoder.jp/users/Ea_Gitro">
          <div className="flex">
              <Image src="https://img.atcoder.jp/assets/favicon.png" alt="atcoder mark" width={24} height={23} className="block shrink m-2"></Image><p className="grow m-2">@Ea_Gitro</p>
            </div>
          </a>

          <a href="https://www.resume.id/ea_gitro">
          <div className="flex">
              <Image src="resume-logo.svg" alt="resume mark" width={24} height={23} className="block shrink m-2"></Image><p className="grow m-2">@ea_gitro</p>
            </div>

          </a>

        </div>

      </div >
    </>
  );
}
