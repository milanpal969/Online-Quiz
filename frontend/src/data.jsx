import { Children } from "react"

export  const data = [

    {
        id:1,
        q:"what is your namee",
        ans:"nothing"
    },
    {
        id:2,
        q:"what is your namee",
        ans:"nothing"
    },
    {
        id:3,
        q:"what is your namee",
        ans:"nothing"
    },
    {
        id:4,
        q:"what is your namee",
        ans:"nothing"
    }
]


export const RecursiveData = [
    {
        label:"Home",
        Children:[
            {
                label:"Profile"
            },
            {
                label:"Log out",
                Children:[
                    {
                        label:"new added"
                    }
                ]
            }
        ]
    },{
        label:"Setting",
        Children:[
            {
                label:"any",
                Children:[
                    {
                    label:"thing"
                    }
                ]
            }
        ]
    }
]

function Helper(){
    return <div>helper function</div>
}

export const Tabdata = [
    {
        label:"Tab1",
        content:"hello"
    },
    {
        label:"Tab2",
        content:<Helper/>
    }
]