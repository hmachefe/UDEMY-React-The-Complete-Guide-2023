// our-domain/news (not news.js but news then serving the news.js file)
// our-domain/something--important is possible, provided that <news> exists as an intermediate folder
// no need to import React from "react"; Can be omitted. Added behind the scenes
import { Fragment } from "react";
import Link from "net/link"

function NewPage() {
    return <Fragment>
        <h1>
            <ul>
                <li>
                    <Link href="/next/next-js-is-a-great-framework">
                        Next JS is a great framework
                    </Link>
                </li>
                <li>
                    Something Else
                </li>
            </ul>
        </h1>
    </Fragment>
  }
  
  
  export default NewPage;