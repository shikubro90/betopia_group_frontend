'use client';
import { scrollToDivById } from '@/utils/dom';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import {
    MdClose,
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
} from 'react-icons/md';

interface NavItem {
    elId?: string;
    label: string;
    href?: string;
    submenu?: NavItem[];
}

// Desktop Navigation Item Component
interface DesktopNavItemProps {
    item: NavItem;
    index: number;
    depth?: number;
    parentPath?: string;
    onStateChange: (path: string, isActive: boolean) => void;
    activeStates: Record<string, boolean>;
}

// Nav items
const navItems: NavItem[] = [
    { label: 'Vision & Purpose Now', href: '/', elId: 'vision_and_purpose' },
    { label: 'Core Beliefs', href: '/', elId: 'core_beliefs' },
    {
        label: 'Words from Leadership',
        href: '/',
        elId: 'world_from_leadership',
    },
    {
        label: 'Ventures',
        submenu: [
            {
                label: 'Digital Solutions',
                submenu: [
                    {
                        label: 'Betopia Limited',
                        href: 'https://betopialimited.com',
                    },
                    { label: 'Softvence', href: ' https://softvence.agency/' },
                    {
                        label: 'Sparktech',
                        href: 'https://www.sparktech.agency/',
                    },
                    { label: 'SM Technology', href: 'https://smtech24.com/' },
                    {
                        label: 'Backbencher Studio',
                        href: 'https://backbencher.studio/',
                    },
                    {
                        label: 'Bdcalling IT Ltd',
                        href: 'https://bdcalling.com/',
                    },
                    { label: 'JVAI', href: 'https://joinventureai.com/' },

                    {
                        label: 'ScaleUp',
                        href: 'https://scaleupadsagency.com/ ',
                    },
                    {
                        label: 'ZenexCloud',
                        href: 'https://www.zenexcloud.com/ ',
                    },
                    // {
                    //     label: "Fire AI",
                    //     href: "#",
                    // },
                ],
            },
            {
                label: 'Education',
                submenu: [
                    {
                        label: 'Bdcalling Academy',
                        href: 'https://www.bdcallingacademy.com/ ',
                    },
                ],
            },
            // {
            //     label: "Real Estate",
            //     // submenu: [
            //     //     { label: "Opsori Holdings Ltd", href: "#" },
            //     //     {
            //     //         label: "TT Holdings Ltd",
            //     //         href: "#",
            //     //     },
            //     // ],
            // },
            {
                label: 'Power',
                submenu: [
                    {
                        label: 'Betopia PulseGrid Ltd',
                        href: 'https://betopiapulsegrid.com/',
                    },
                ],
            },
            {
                label: 'Supply Chain',
                submenu: [
                    {
                        label: 'Bdcalling Enterprise',
                        href: 'https://bdcallingenterprise.com/ ',
                    },
                ],
            },
        ],
    },
    { label: 'Impact & Responsibility', href: '/impact-and-responsibility' },
    { label: 'News & Stories', href: '/news-and-stories' },
    { label: 'Career', href: '/career' },
];

const DesktopNavItem: React.FC<DesktopNavItemProps> = ({
    item,
    index,
    depth = 0,
    parentPath = '',
    onStateChange,
    activeStates,
}) => {
    const timeoutRef = useRef<null | NodeJS.Timeout>(null);
    const currentPath = parentPath ? `${parentPath}-${index}` : `${index}`;

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        onStateChange(currentPath, true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            onStateChange(currentPath, false);
        }, 50);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isActive = !!activeStates[currentPath];

    return (
        <div
            className="relative group z-[9999]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link
                onClick={() => {
                    if (item.elId) {
                        const id = item.elId;
                        setTimeout(() => {
                            scrollToDivById(id);
                        }, 300);
                    }
                }}
                href={item.href || '#'}
                target={item.href?.includes('http') ? '_blank' : undefined}
                className={`${
                    depth === 0
                        ? 'text-gray-700 hover:text-orange-500 font-medium py-2'
                        : 'flex items-center justify-between px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                } transition-colors duration-200`}
            >
                <div className=" flex items-center gap-2">
                    <p>{item.label}</p>
                    {hasSubmenu && !depth && (
                        <>
                            {isActive ? (
                                <MdKeyboardArrowUp size={20} />
                            ) : (
                                <MdKeyboardArrowDown size={20} />
                            )}
                        </>
                    )}
                </div>
                {hasSubmenu && depth > 0 && (
                    <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                )}
            </Link>

            {hasSubmenu && isActive && (
                <div
                    className={`absolute bg-white shadow-lg rounded-lg border border-gray-100 py-2 min-w-[220px] z-[9999] ${
                        depth === 0
                            ? 'top-full left-0 mt-1'
                            : 'top-0 left-full ml-1'
                    }`}
                >
                    {item.submenu!.map((subItem, subIndex) => (
                        <DesktopNavItem
                            key={subIndex}
                            item={subItem}
                            index={subIndex}
                            depth={depth + 1}
                            parentPath={currentPath}
                            onStateChange={onStateChange}
                            activeStates={activeStates}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

// Mobile Navigation Item Component
interface MobileNavItemProps {
    item: NavItem;
    index: string | number;
    depth?: number;
    activeStates: Record<string | number, boolean>;
    onToggle: (key: string | number) => void;
    onLinkClick: () => void;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({
    item,
    index,
    depth = 0,
    activeStates,
    onToggle,
    onLinkClick,
}) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isActive = activeStates[index];
    const paddingLeft = depth === 0 ? 'px-2' : depth === 1 ? 'px-6' : 'px-8';
    const textSize = depth === 0 ? 'font-medium' : depth === 1 ? '' : 'text-sm';

    if (!hasSubmenu) {
        return (
            <li
                onClick={() => {
                    if (item.elId) {
                        const id = item.elId;
                        setTimeout(() => {
                            scrollToDivById(id);
                        }, 300);
                    }
                }}
                className={
                    depth === 0
                        ? 'border-b text-gray_text border-gray-100 '
                        : ''
                }
            >
                <Link
                    href={item.href || '#'}
                    className={`block py-2 ${paddingLeft} text-gray_text hover:text-orange-500 transition-colors  ${textSize}`}
                    onClick={onLinkClick}
                >
                    {item.label}
                </Link>
            </li>
        );
    }

    return (
        <div className={depth === 0 ? 'border-b border-gray-100 ' : ''}>
            <div
                className={`flex justify-between items-center cursor-pointer py-2 ${paddingLeft} text-gray_text hover:text-orange-500 transition-colors ${textSize}`}
                onClick={() => onToggle(index)}
            >
                <span>{item.label}</span>
                <MdKeyboardArrowUp
                    size={20}
                    className={` duration-300   ${
                        isActive ? ' rotate-180' : ''
                    }`}
                />
            </div>

            {isActive && (
                <div
                    className={
                        depth === 0
                            ? 'bg-gray-50 pb-2'
                            : depth === 1
                            ? 'bg-white'
                            : 'bg-gray-50'
                    }
                >
                    {item.submenu!.map((subItem, subIndex) => {
                        const subKey = `${index}-${subIndex}`;
                        return (
                            <MobileNavItem
                                key={subKey}
                                item={subItem}
                                index={subKey}
                                depth={depth + 1}
                                activeStates={activeStates}
                                onToggle={onToggle}
                                onLinkClick={onLinkClick}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default function Navbar() {
    const [desktopActiveStates, setDesktopActiveStates] = useState<
        Record<string, boolean>
    >({});
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileActiveStates, setMobileActiveStates] = useState<
        Record<string | number, boolean>
    >({});

    const handleDesktopStateChange = (path: string, isActive: boolean) => {
        setDesktopActiveStates((prev) => {
            const updated = { ...prev };
            updated[path] = isActive;

            // Keep ancestors open when hovering children
            if (isActive) {
                const parts = path.split('-');
                for (let i = 1; i < parts.length; i++) {
                    updated[parts.slice(0, i).join('-')] = true;
                }
            }
            return updated;
        });
    };

    const toggleMobileSubmenu = (index: string | number) => {
        setMobileActiveStates((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const closeMobileMenu = () => {
        setMobileOpen(false);
        setMobileActiveStates({});
    };

    return (
        <nav
            id="header"
            className="bg-white py-0 xl:py-5 shadow-sm relative z-50 px-4 lg:px-6"
        >
            <div className="max-w-7xl mx-auto ">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.svg"
                            width={120}
                            height={40}
                            alt="Betopia Logo"
                            className="h-8 xl:h-12 w-auto"
                        />
                    </Link>

                    {/* Desktop */}
                    <div className="hidden xl:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <DesktopNavItem
                                key={index}
                                item={item}
                                index={index}
                                onStateChange={handleDesktopStateChange}
                                activeStates={desktopActiveStates}
                            />
                        ))}
                    </div>

                    {/* Mobile button */}
                    <button
                        className="xl:hidden text-gray-700 hover:text-orange-500 transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? (
                            <MdClose className="w-6 h-6" />
                        ) : (
                            <HiBars3 className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                onClick={(e) => {
                    closeMobileMenu();
                }}
                className={`xl:hidden ${
                    mobileOpen ? '' : ' hidden'
                }  absolute top-full overflow-y-auto left-0 h-screen inset-0  w-full  shadow-lg border-t  border-gray-100 transition-all duration-150 ease-in-out`}
            >
                <ul
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    className={`py-2 bg-white ${
                        mobileOpen
                            ? 'opacity-100 visible max-h-[80vh]'
                            : 'opacity-0 invisible max-h-0'
                    }`}
                >
                    {navItems.map((item, index) => (
                        <MobileNavItem
                            key={index}
                            item={item}
                            index={index}
                            activeStates={mobileActiveStates}
                            onToggle={toggleMobileSubmenu}
                            onLinkClick={closeMobileMenu}
                        />
                    ))}
                </ul>
            </div>
        </nav>
    );
}
