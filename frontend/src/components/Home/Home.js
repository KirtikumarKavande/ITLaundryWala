
import { useState } from "react";
import Modal from "./UI/Modal";
import OrderSummeryAndCustomerDetails from "./OrderSummeryAndCustomerDetails";
import WashTypeButtons from "./SelectWashType/WashTypeButtons";
import CustomerDetails from "./CustomerDetails";
import PerPieceClothOrderItem from "./UI/perPeiceClothOrderItem";
import {
  DryCleaningButtonOptions,
  expressLaundryButtonOptions,
  houseHoldButtonsOptions,
  pressHoldButtonsOptions,
} from "../utilities/constant";
import { dryCleaningMenu } from "./Pricing/DryCleaningMenu";
import { Household } from "./Pricing/HouseHold";
import { Press } from "./Pricing/Press";
import { expressLaundry } from "./Pricing/ExpressLaundry";
import Slider from "./UI/Carousel/Slider";

const Home = () => {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }
  const [currentPage, setCurrentPage] = useState("buttonList");
  console.log("currentPage", currentPage);

  return (
    <>
      {/* <OrderSummeryAndCustomerDetails/> */}
      {currentPage === "buttonList" && (
        <Modal
          isOpen={open}
          setIsOpen={setOpen}
          headline="Please Select Wash Type"
        >
          <WashTypeButtons setCurrentPage={setCurrentPage} />
        </Modal>
      )}
      {currentPage === "customerDetails" && (
        <Modal
          isOpen={open}
          setIsOpen={setOpen}
          setCurrentPage={setCurrentPage}
          headline="Please Schedule Your Order"
        >
          <CustomerDetails setCurrentPage={setCurrentPage} />
        </Modal>
      )}

      {currentPage === "dryCleaning" && (
        <Modal
          isOpen={open}
          setIsOpen={setOpen}
          setCurrentPage={setCurrentPage}
          headline="Please Schedule Your Order"
        >
          <PerPieceClothOrderItem
            setCurrentPage={setCurrentPage}
            buttonNames={DryCleaningButtonOptions}
            washType={dryCleaningMenu}
            title={"Dry Cleaning"}
          />
        </Modal>
      )}
      {currentPage === "houseHold" && (
        <Modal
          isOpen={open}
          setIsOpen={setOpen}
          setCurrentPage={setCurrentPage}
          headline="Please Schedule Your Order"
        >
          <PerPieceClothOrderItem
            setCurrentPage={setCurrentPage}
            buttonNames={houseHoldButtonsOptions}
            washType={Household}
            title={"Household"}
          />
        </Modal>
      )}
      {currentPage === "press" && (
        <Modal
          isOpen={open}
          setIsOpen={setOpen}
          setCurrentPage={setCurrentPage}
          headline="Please Schedule Your Order"
        >
          <PerPieceClothOrderItem
            setCurrentPage={setCurrentPage}
            buttonNames={pressHoldButtonsOptions}
            washType={Press}
            title={"Steam Iron"}
          />
        </Modal>
      )}

{currentPage === "expressLaundry" && (
        <Modal
          isOpen={open}
          setIsOpen={setOpen}
          setCurrentPage={setCurrentPage}
          headline="Please Schedule Your Order"
        >
          <PerPieceClothOrderItem
            setCurrentPage={setCurrentPage}
            buttonNames={expressLaundryButtonOptions}
            washType={expressLaundry}
            title={"Express Charges Included"}
          />
        </Modal>
      )}

      {currentPage === "orderDetailsAndCustomerDetails" && (
        <Modal
          isOpen={open}
          setIsOpen={setOpen}
          setCurrentPage={setCurrentPage}
          headline="Please Schedule Your Order"
        >
          <OrderSummeryAndCustomerDetails setCurrentPage={setCurrentPage} />
        </Modal>
      )}

      <div className="w-full ">
        <div className="h-[68px]  bg-[#202124] flex items-center justify-center w-full">
          <div className="text-[#fff] font-bold text-lg ">
            LET'S START YOUR ORDER
          </div>
          <button
            onClick={openModal}
            variant="gradient"
            className="text-white ml-4 bg-[#e4002b] py-3 text-center font-medium rounded-[1.4rem] text-[0.9rem] w-28 md:min-w-[10.4rem]"
          >
            Start Order
          </button>
        </div>
      </div>

      <div  className="w-full">
        {" "}
        {/* <div  className=" h-[415px] w-[1350px] mx-auto border border-red-500  "></div> */}
        {/* <img src="./banner.jpg" alt="" className=" h-[430px]  mx-auto  " /> */}
     <Slider/>
      </div>
      <div>

      Lorem Ipsum
"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."

freestar
What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima iusto, animi facere quod excepturi est? Veritatis neque unde vitae libero amet. Quia facere totam odit nam ratione cupiditate animi quasi culpa quibusdam iste possimus ducimus, repudiandae aut. Facere sapiente vel enim dolore veritatis mollitia? Doloremque quo exercitationem neque omnis consequuntur aperiam libero dolor quam voluptatibus molestias veniam voluptate laborum, quia quaerat voluptatum laudantium cum, dolore reprehenderit officiis rem dolores eveniet numquam! Deleniti, sequi quo ex vitae nulla id consequatur iste odit, odio praesentium sunt sed accusamus voluptatibus repellat possimus porro neque eligendi qui tenetur obcaecati consectetur omnis ratione excepturi culpa. Doloremque debitis quo molestiae! Nesciunt, exercitationem, porro eveniet voluptate, doloremque animi harum aliquid officia eius tempore incidunt quisquam quis totam eos! Debitis, natus harum est placeat perspiciatis eligendi sed nobis cupiditate obcaecati eius illo qui modi corporis nisi ea aut itaque perferendis quaerat, unde quisquam nostrum. Illo, facilis dolorum! Nobis optio ad beatae, soluta facilis in eaque eius sit, fuga exercitationem minima veritatis eligendi dolore voluptates nostrum obcaecati quas? Nesciunt eius ipsum, laboriosam atque maxime modi quidem facilis magni alias! Quam tempore itaque fugiat beatae praesentium delectus unde placeat consectetur labore ipsum, impedit tenetur, magni nihil commodi incidunt? Id, possimus vel! Vel illum sunt itaque aspernatur ratione ipsa facilis animi cum molestiae officiis maxime quasi error unde quo nam asperiores possimus nulla, corporis, nostrum pariatur! Praesentium, excepturi pariatur sequi earum voluptatum possimus dicta dolorum libero inventore labore fugiat quia, neque beatae eaque, explicabo rem similique incidunt aperiam laboriosam consequuntur. Ipsa, placeat doloribus. Vitae veritatis similique perferendis ad! Repudiandae cum officia magni aspernatur deserunt quisquam quae saepe beatae adipisci non a eligendi debitis iure consequatur fuga ratione architecto mollitia amet officiis, autem minima. Praesentium dolorum laudantium quasi iure natus voluptatibus exercitationem incidunt omnis voluptates laboriosam labore saepe atque asperiores ipsam eaque, voluptate culpa mollitia repellat voluptas dolores libero fugit. Tempore, exercitationem nisi at animi assumenda molestias voluptas repudiandae perspiciatis tenetur porro aliquid quasi reiciendis odit nulla, sapiente libero autem non distinctio! Quibusdam nobis veniam labore. Ab voluptatibus cupiditate omnis impedit? Nesciunt eius ab aliquam dicta? Laudantium id totam, minima impedit ab labore dolorem ducimus est, saepe sit corporis animi alias eum officia aut facere facilis excepturi. Eligendi delectus culpa, debitis commodi amet quas soluta ex cumque aspernatur fugiat tenetur facilis, optio non consequuntur blanditiis doloribus nostrum! Molestiae vel quam unde sequi! Molestias, voluptatibus? Placeat consequatur nostrum necessitatibus omnis ipsam quos sint doloribus cupiditate quas reiciendis voluptatum, eligendi laudantium, accusamus suscipit. Quibusdam culpa aperiam quo laudantium nesciunt non officiis, reiciendis voluptate nam! Nobis, impedit. Excepturi aut facilis nostrum ratione obcaecati asperiores totam similique sapiente placeat blanditiis? Possimus ipsa alias culpa debitis, expedita labore harum minus aperiam facere veniam inventore, ut consectetur et qui iste odio cupiditate consequatur quia recusandae doloribus. Ducimus doloremque ipsum voluptatem, rem quae assumenda! Ut asperiores suscipit fugiat libero, aut, obcaecati illo neque sapiente enim itaque velit explicabo laborum! Voluptas libero iure perferendis incidunt officiis obcaecati fugit laboriosam quae quis, suscipit odit est distinctio quaerat nobis reprehenderit! Voluptas consequuntur maxime libero dignissimos? Cumque facere deserunt sint, magni sapiente architecto quae. Dolores laudantium quisquam aperiam nostrum, reprehenderit, animi iste quod aliquid tempora autem quis est placeat quia assumenda incidunt praesentium libero ipsa iure sequi cumque corporis quas. Nemo vitae blanditiis ipsa tempora fugit beatae aliquam, et quos. Culpa id aperiam illo sequi optio dolor unde, commodi ad laboriosam aliquam repellendus aut tempora rerum esse dignissimos! Eos beatae perferendis hic culpa aliquam eius tempora explicabo, reprehenderit blanditiis magnam commodi sunt dignissimos architecto sint deserunt nostrum at cumque. Impedit ex laboriosam accusantium ullam qui cupiditate laudantium nesciunt dolorem, fuga eaque minima tenetur earum quod neque voluptatibus, perspiciatis deleniti ratione harum quisquam illum mollitia sit totam fugiat aperiam? Nemo, rem. Voluptas maiores laboriosam ratione officia omnis delectus repellendus quam a pariatur. Corrupti repellat iure, et harum atque, minima delectus illum nemo accusantium facere corporis odio blanditiis suscipit! Dicta, optio commodi. Nulla, consequatur commodi. Incidunt sunt sequi doloremque excepturi hic labore tenetur possimus? Consequatur harum ipsum excepturi exercitationem laboriosam, deleniti nobis delectus possimus neque deserunt tempora vero quis explicabo saepe atque necessitatibus fugit soluta dolorum quae nihil facilis consequuntur molestias cum! Sed quasi eius vitae dolor aspernatur laborum, iure a ad quod ipsam maiores debitis, hic nemo veritatis veniam ipsa iste. Labore quisquam eum praesentium. Labore quae sequi unde temporibus minus pariatur voluptatibus tenetur laboriosam libero, perspiciatis mollitia repellendus veritatis similique error doloremque adipisci ratione doloribus repudiandae eum quis possimus. Repellendus, mollitia obcaecati necessitatibus quibusdam adipisci laudantium iusto expedita impedit consequatur? Magnam sapiente, molestias modi nobis eveniet asperiores vitae odio, tempora id ea temporibus quasi ipsa atque alias. Facilis voluptate maiores nobis officia nisi? Eius odit commodi dignissimos debitis architecto! Dolor odio fuga nostrum. Explicabo maiores asperiores esse dicta totam, in magni architecto quidem quisquam laboriosam nobis impedit eum eligendi tenetur nisi perspiciatis voluptates ab reiciendis quibusdam harum expedita necessitatibus nihil facilis perferendis! Enim dicta nemo adipisci neque distinctio eos aut rerum quidem natus tempore nihil dolorem nisi fuga ea, sint modi ipsa facere repellendus, minima consequatur. Provident ipsam reprehenderit dolorum quod eius porro in, facilis excepturi ut, expedita, numquam enim amet veniam omnis beatae consequatur laborum iste nulla illo. Aperiam minus, exercitationem atque nihil libero saepe nisi adipisci veritatis assumenda dolore quia sed porro omnis cupiditate hic fugit perferendis quam consequuntur debitis rerum rem! Esse dolorem dolore rem ea nemo nulla, doloremque debitis sint delectus eveniet repellendus laborum harum laudantium est quam saepe unde? Labore, vero placeat ipsum quia error adipisci minima magnam totam? Iste esse laborum dicta, aut quo dolore, similique autem eius magni porro incidunt adipisci harum placeat rem dolorum. Earum, modi cumque exercitationem rerum illum, ipsam ab qui quos corporis repudiandae sapiente at ad veritatis temporibus omnis nisi tenetur. Laboriosam, sunt. Rerum eius asperiores explicabo nam, inventore, ad minima fugiat dolor repudiandae dignissimos unde, quia itaque. Laboriosam iusto asperiores itaque quasi id sapiente quaerat libero commodi modi sunt, eveniet, nihil eum sequi eos maxime accusantium amet dolore, eligendi ex repudiandae. Eveniet quos laudantium praesentium, neque facilis cum doloremque. Atque, nulla.
5
	paragraphs
	words
	bytes
	lists
	Start with 'Lorem
ipsum dolor sit amet...'

      </div>
    </>
  );
};

export default Home;
