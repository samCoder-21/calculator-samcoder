// first = make variable of all buttons and inputs and answer div.

const onOff = document.querySelector('.switch')

const que = document.querySelector('.question')

const ans = document.querySelector('.answer')

const nums = document.querySelectorAll('.btn')

const ariths = document.querySelectorAll('.btn1')

const clr = document.querySelector('.clear')

// targetting onOff button and making the main base of all progress

onOff.addEventListener('click', ()=>{

        if(que.value == '' && que.type == 'hidden'){

        que.type = 'text'

        ans.innerHTML = ''

        que.placeholder = '0'

        let arith

        // for loop for trigger particular number button
        for(let i = 0 ; i < nums.length ; i++){

            nums[i].addEventListener('click', ()=>{
                
                que.value +=  nums[i].innerHTML

            })//end of nums event listener    
        }//end of for loop

        // for loop to trigger arithmatic signs button 
        for(let r = 0 ; r < ariths.length; r++){

            ariths[r].addEventListener('click', ()=>{

                que.value += ariths[r].innerHTML

                arith = que.value

                if(arith == true){
                    
                    for(let f = 0 ; f < nums.length ; f++){

                        nums[f].addEventListener('click', ()=>{
                    
                        que.value +=  nums[f].innerHTML
    
                        })//end of nums event listener    
                    }//end of for loop
                }
            })

        }
         
        // now targetting equal button to do calculation-+

        const equal = document.querySelector('.row4')

        equal.addEventListener('click',()=>{
            
            let arr = eval(que.value)

            ans.innerHTML = arr

        })
    }else{

        window.location.reload()

        que.value = ''

        ans.innerHTML = ''

        que.type = 'hidden'

        que.placeholder = ''

    }
})

clr.addEventListener('click', ()=>{
        
        que.value = ''

        que.placeholder = '0'

        ans.innerHTML = ''

})

