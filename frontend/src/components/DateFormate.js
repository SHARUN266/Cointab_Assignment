

export function DateFormate(date){
    let ans=`${new Date(date).getDate()}/${new Date(date).getMonth()}/${new Date(date).getFullYear()}`
    return ans
}