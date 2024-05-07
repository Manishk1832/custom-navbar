import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown,FaAngleUp } from "react-icons/fa";
import { useState } from "react";

const Navlinks = () => {
    const [heading, setHeading] = useState("");
    const [subheading, SetSubHeading] = useState("");
    

    const handleClick = (url,name) =>{
      console.log('url',url)

      console.log('clicked',name)
      
        
    }

  const links = [
    {
      name: "GOVERNORATES",
      submenu: true,
      sublinks: [
        {
          Head: "",
          sublinks: [
            { name: "Capital  GOVERNORATES", link: "/capital" },
            { name: "Muharraq GOVERNORATES", link: "/muharraq" },
            { name: "Northern GOVERNORATES", link: "/northern" },
            { name: "Southern GOVERNORATES", link: "/southern" },
          ],
        },
      ],
    },
    {
      name: "PROPERTIES",
      submenu: true,
      sublinks: [
        {
          Head: "RENT",
          sublinks: [
            { name: "RESIDENTIAL", link: "/rentresidential" },
            { name: "COMMERCIAL", link: "/rentcommercial" },
            { name: "LANDS", link: "/rentlands" },
            { name: "INDUSTRIAL", link: "/rentindustrial" },
          ],
        },
        {
          Head: "SALE",
          sublinks: [
            { name: "RESIDENTIAL", link: "/saleresidential" },
            { name: "COMMERCIAL", link: "/salecommercial" },
            { name: "LANDS", link: "/salelands" },
            { name: "INDUSTRIAL", link: "/saleindustrial" },
          ],
        },
      ],
    },
    { name: "BLOGS" },
    { name: "CONTACT US" },
    { name: "MORE" , submenu:true , sublinks:[
        {
        Head:"",
        sublinks:[
            {name:"whoAreWe",link:"/about"},
            {name:"important Link Featured Service",link:"/important"},
            {name:"lands Classification Uses",link:"/lands"},
            {name:"contracts And Agreements",link:"/contracts"},
            {name:"realEstate Management",link:"/manage"},
            {name:"careers",link:"/career"},
        ]
    }
    ]},
    { name: "EN" , submenu:true , sublinks:[
        {
        Head:"",
        sublinks:[
            {name:"English",link:"/english"},
            {name:"عربي",link:"/arabic"}
        ]
    }
    
    ]},
  ];

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 md:cursor-pointer group hover:text-[#503691] ">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                if (heading !== link.name) {
                  setHeading(link.name);
                  SetSubHeading("");
                } else {
                  setHeading("");
                }
              }}
            >
              {link.name}
              {link.submenu && !["BLOGS", "CONTACT US"].includes(link.name) && (
                <span className="text-xl md:hidden inline">
                  {heading === link.name ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              )}
              {link.submenu && !["BLOGS", "CONTACT US"].includes(link.name) && (
                <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180">
                  {heading === link.name ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              )}
            </h1>

            {link.submenu && (
              <div>
                <div className="absolute top-10 hidden group-hover:md:block hover:mdblock">
                  <div className="py-3">
                    <div className="w-4 h-4 left-2 absolute mt-1 bg-slate-500 rotate-45"></div>
                  </div>
                  <div
                    className={`backdrop-blur-xl backdrop-brightness-75 rounded-md text-white w-70 p-3.5 grid gap-20 ${
                      link.sublinks[0].Head === "" ? "grid-cols-1" : "grid-cols-2"
                    }`}
                  >
                    {link.sublinks.map((submenu, subIndex) => (
                      <div key={subIndex}>
                        <h1 className="text-white text-sm ">{submenu.Head}</h1>
                        {submenu.sublinks.map((slink, slinkIndex) => (
                          <li
                            key={slinkIndex}
                            className="hover:bg-[#503691] focus:bg-[#503691] focus:text-white text-sm p-4 rounded-md text-wrap"
                          >
                            <Link
                              to={slink.link}
                              onClick={() => handleClick(slink.link,slink.name)}
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* mobile menu */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {link.sublinks &&
              link.sublinks.map((slink, slinkIndex) => (
                <div key={slinkIndex}>
                  <div>
                    <h1
                      onClick={() =>
                        subheading !== slink.Head
                          ? setSubHeading(slink.Head)
                          : setSubHeading("")
                      }
                      className="py-0 pl-7 font-semibold md:pr-0 pr-5"
                    >
                      {slink.Head}
                    </h1>
                    <div
                      className={`${
                        subheading === slink.Head ? "md:hidden" : "hidden"
                      }`}
                    >
                      {slink.sublinks.map((slinks, slinksIndex) => (
                        <li key={slinksIndex} className="py-3">
                          <Link
                            to={slinks.link}
                            className="hover:bg-white hover:text-[#503691] focus:bg-[#503691] focus:text-white p-3 rounded-md"
                            onClick={() => handleClick(slinks.link,slinks.name)}
                          >
                            {slinks.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Navlinks;
