import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from 'next/link';
import Navbar from './Navbar';
import SideBar from './SideBAr';

export default function LayoutAuthenticated(props) {




return (

    <div>
        <div><Navbar/></div>
        <div class="flex">
            <div><SideBar/></div>
            <div class="w-full"> {props.children}</div>
        </div>
    </div>
)
}