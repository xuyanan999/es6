


// const scanf=require('scanf');   
// console.log('输入两个数，判断两个数，并输出最大值');
//  console.log('输入a:');
//   let a=scanf('%d'); 
//   console.log('输入b:');
//    let b=scanf('%d');
//     if(a>b){     console.log('最大值是a：'+a); 
// }else if(b>a){     console.log('最大值是b：'+b);
//  }else{  console.log('a=b='+a); }


    // const scanf=require('scanf');   
    // let arr=[1,2,3];
    // console.log('数组arr:长度为'+arr.length+'\n分别是:'+arr);





            // const scanf=require('scanf'); 
            // console.log('欢迎进入XXX系统'); 
            // while(1){ 
            //     console.log('1---添加');    
            //     console.log('2---显示全部');   
            //     console.log('3---删除');   
            //     console.log('4---退出'); 
            //     let con=scanf('%d'); 
            //     if(con===1){
            //         console.log('1---添加');
            //         console.log('点击回车继续');
            //         scanf('%d'); 
            //        } 
            //     if(con===2){ 
            //         console.log('2---显示全部');    
            //         console.log('点击回车继续'); 
            //         scanf('%d');  
            //        } 
            //      if(con===3){
            //         console.log('3---删除'); 
            //         console.log('点击回车继续'); 
            //         scanf('%d');   
            //         }
            //     if(con===4){
            //          console.log('退出');
            //          break; 
            //         } 
            //     }













        //     const scanf = require('scanf'); 
        //     console.log('欢迎进入幸运数字管理系统');//启动logo 
        //     let arr = []; 
        //     while (1) { 
        //             console.log('1---添加幸运数字');   
        //             console.log('2---删除最后一个幸运数字');//删除指定的幸运数字  
        //             console.log('3---显示全部幸运数字');  
        //             console.log('4---退出'); 
        //             console.log('请输入相应功能编号'); 
        //             let code = scanf('%d'); 
        //         if(code === 1){ 
        //              console.log('请输入一个要添加的幸运数字'); 
        //              let x = scanf('%d'); 
        //              arr.push(x);     
        //              console.log('添加成功'); 
        //              console.log('点击回车继续');
        //              scanf('%d');     } 
        //         if(code === 2){  
        //             console.log('开始删除');
        //             arr.pop();  
        //             console.log('删除成功');
        //             console.log('点击回车继续');
        //             scanf('%d');     } 
        //          if(code === 3){    
        //             console.log('全部幸运数字如下：'); //此for循环作用为：打印数组中的每一个幸运数字
        //             for(let i=0;i<arr.length;i++){
        //             let q = arr[i];    
        //             console.log(q);         }   
        //             console.log('点击回车继续'); 
        //             scanf('%d');     } 
        //         if(code === 4){   
        //             console.log('程序退出');
        //             break; 
        //     } 
        // }











// const  scanf=require('scanf');
// console.log('欢迎进入坐标管理系统');
// let arr=[];
// while(1){
//     console.log('1---添加一个坐标'); 
//     console.log('2---显示全部坐标');
//     console.log('3---删除最后一个坐标');
//     console.log('4---退出');  
//     let con=scanf('%d');
//         if(con===1){
//             console.log('1---添加一个坐标'); 
//             console.log('输入横坐标');
//             let x=scanf('%d');
//             console.log('输入纵坐标');
//             let y=scanf('%d');
//             let zuobiao={
//                 'x':x,
//                 'y':y
//             }  ;
//             arr.push(zuobiao);
//             console.log('坐标添加成功');
//             scanf('%d');
//         }
//         if(con===2){
//             console.log('1---显示全部坐标'); 
//             for(let i=0;i<arr.length;i++){            
//               let xyn=arr[i];     
//               console.log(`第${i+1}坐标为(${xyn.x},${xyn.y})`); }         
//               console.log('点击回车继续');
//                scanf('%d');  }  
//         if(con===3){
//             console.log('3---删除最后一个坐标');
//             arr.pop();
//             console.log('删除坐标成功');
//             scanf('%d');
//         }
//         if(con===4){
//             console.log('退出');
//             break;
//         }
//     }
    



    // const  scanf=require('scanf');
    // let xinlong={
    //     a:111,
    //     b:222,
    // }
    // console.log(xinlong);





    // const  scanf=require('scanf');
    // console.log('输入值'); 
    // let con=scanf('%s');
    // scanf('%s');
    // console.log('您输入的值为'+con);




    




            const scanf=require('scanf'); 
            console.log('欢迎进学生成绩管理系统'); 
            let arr=[]; 
            while(1){    
                console.log('1---添加一个学生学科成绩');     
                console.log('2---显示全部学生学科成绩');     
                console.log('3---删除最后一个学生学科成绩');    
                console.log('4---退出'); 
                let con=scanf('%d');  
                if(con===1){         
                    console.log('1---添加一个学生学科成绩');         
                    console.log('请输入学生姓名：');         
                    let xingming=scanf('%s');         
                    console.log('请输入语文成绩：');         
                    let yuwen=scanf('%d');         
                    console.log('请输入数学成绩：');         
                    let shuxue=scanf('%d');         
                    let student={             
                        'xingming':xingming,             
                        'yuwen':yuwen,             
                        'shuxue':shuxue        
                        };        
                        arr.push(student);  
                        console.log('添加成绩成功');         
                        scanf('%d');     }     
                        if(con===2){  
                        console.log('2---显示全部学生学科成绩');        
                        for(let i=0;i<arr.length;i++){             
                            let syk=arr[i]; 
                            console.log(`学生：${syk.xingming}\n语文：${syk.yuwen}\n数学： ${syk.shuxue}`);         
                             }    
                            console.log('点击回车继续');         
                                scanf('%d');     
                            }
                            if(con===3){         
                                console.log('3---删除最后一个学生学科成绩');         
                                arr.pop();         
                                console.log('删除最后一名学生成绩成功');         
                                scanf('%d');     
                            }        
                            if(con===4){         
                                console.log('退出');        
                                break;    
                                }
                                } 
                    
                  


       





     





        

















            // const scanf=require('scanf');   
            // let arr=[1,2,3,4,5,6];
            //  // 循环遍历数组 
            //  for(let i=0;i<arr.length;i++){
            //   let xinlong = arr[i];
            //   console.log(xinlong);
            //  }


            // const scanf=require('scanf');   
            // let xinlong={ a:1,b:2} 
            // console.log('横坐标：'+xinlong.a);
            // console.log('纵坐标：'+xinlong.b);
            // console.log('坐标：('+xinlong.a+','+xinlong.b+')');