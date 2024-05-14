import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './Value.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from './utils/accordion';

const Value = () => {
    return (
        <section className="v-wrapper">
            <div className="paddings innerwidth flexCenter v-container">
                {/* Left side */}
                <div className="v-left">
                    <div className="img-container">
                        <img src="home.jpg" alt="Home" />
                    </div>
                </div>

                {/* Right side */}
                <div className="flexColStar v-right">
                    <span className="orangeText">Our Value</span>
                    <span className="PrimaryText">Only Value for You</span>
                    <span>We are always ready to help</span>
                    <Accordion
                        className="accordion"
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {data.map((item, i) => {
                            return (
                                <AccordionItem key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="PrimaryText">{item.heading}</span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20} />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <p >{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Value;
