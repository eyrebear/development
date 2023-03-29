import React from "react"
// //which props would I bring in?  can I bring in my badges and form data?
// function Badge(props) {
//     const {formData} = props
//     return (
//     <div className="badge">
//         <p className="badge-data">Name:  {formData.firstName} {formData.lastName}</p>
//     </div>
//     )
// }
// export default Badge

 export default function Badge(props) {

    const {badges} =props

//   return (
        const badgeList = badges.map((badge, index) => (
        <div className="badge" key={index}>
            <div id="badge-header">Badge:</div>
        <p className="badge-data">Name:  {badge.firstName} {badge.lastName}</p>
        <p className="badge-data">Phone: {badge.phone}</p>
        <p className="badge-data">Place of Birth: {badge.birthPlace}</p>
        <p className="badge-data">Favorite Food: {badge.favFood}</p>
        <p className="badge-data">Email: {badge.email}</p>
        <div className="badge-data" id="badge-comment-box"></div>
            <p id="badge-comments">{badge.comments}</p>
        </div>
         ))

    return <div>{badgeList}</div>
   
}

