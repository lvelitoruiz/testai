import { NavArrowLeft, CollageFrame, Settings } from "iconoir-react";
import React from "react";
import { HeaderProps } from "../types";

const Header = ({ sidebar = true, onActivateSidebar }: HeaderProps) => {
    return (
        <section className="bg-[#F97316] h-[90px] flex justify-between items-center px-10">
            <div className="flex items-center gap-4">
                <button className="flex items-center justify-center px-5 border border-white h-[45px] rounded gap-1 text-white">
                    <NavArrowLeft className="text-sm" />
                    <span>Atrás</span>
                </button>
                <button
                    className={`flex items-center justify-center border border-white w-[45px] h-[45px] rounded gap-1 ${sidebar ? "text-white" : "bg-white text-[#F97316]"}`}
                    onClick={onActivateSidebar}
                >
                    <CollageFrame className="text-sm w-5 h-5" />
                </button>
            </div>
            <button className="flex items-center justify-center border border-white w-[45px] h-[45px] rounded gap-1 text-white">
                <Settings className="text-sm" />
            </button>
        </section>
    );
};

export default Header;
