<template>
    <div class="  " style="background-color: rgb(204, 168, 233);;">
        <div class="">
            <div class="">
                <form @submit.prevent="infoSubmit" dir="rtl">
                    <div class="">
                        <div class="">
                            <h1 class="">البيانات الشخصية</h1>
                        </div>
                        <div class="">
                            <div class=""><label class="labels" style="width: 20%;">الأسم</label></div>
                            <input type="text" class="form-control" v-model="info.name" style="" placeholder="الأسم">

                        </div>
                    </div>
                    <div>


                        <div class="">
                            <div class=""><label class="labels">المحمول</label></div>
                            <input type="text" class="form-control" placeholder="المحمول" v-model="info.phone">


                        </div>
                        <div class="">

                            <div class="">
                                <button class="" type="submit" :disabled="disableb">تحديث
                                    البيانات الشخصية</button>
                            </div>
                            
                        </div>
                    </div>
                </form>
            </div>
            <div class="">
                <form @submit.prevent="passSubmit" dir="rtl">
                    <div class="">
                        <div class="">
                            <h2>تعديل كلمة المرور</h2>
                        </div><br>
                        <div>
                            <div>
                                <label class="labels">كلمة المرور الحالية</label>
                            </div>
                            <input type="text" v-model="pass.oldpassword" class="form-control" placeholder="كلمة المرور"
                                required>
                        </div> <br>
                        <div class=""><div><label class="labels">كلمة المرور الجديدة</label></div>
                            <input type="text" v-model="pass.password" class="form-control" placeholder="كلمة المرور"
                                required>
                        </div> <br>
                        <div class=""><button class="" type="submit" :disabled="disableb">تحديث
                                كلمة المرور</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div v-if="disableb === true">
            <Loader />

        </div>
        <div class="" dir="rtl">
            <div class=" " style="width:fit-content;" dir="rtl">
                <div class="">
                    <label class="" for="flexSwitch">عرض المنشورات الخاصة بي
                    </label>
                    <input class="" type="checkbox" @click="showPosts" role="switch" id="flexSwitch">
                </div>
            </div>
        </div><br>




    </div>
</template>

<script >
import { reactive } from '@vue/reactivity'
import { onMounted, ref, watchEffect } from 'vue';


export default {
    name: 'Profile',
   
    setup() {
const router=useRouter()
       
        useSeoMeta({
            title: 'الملف الشخصي',
            ogTitle: 'الملف الشخصي',
            description: 'الملف الشخصي',
            ogDescription:'الملف الشخصي',
            ogImage: '',
        })
        const disableb = ref(false)
        const info = reactive({
            name: store.user.name,
            phone: store.user.phone,
        });


        const pass = reactive({
            oldpassword: '',
            password: '',
            password_confirm: ''
        })
        watchEffect(() => {
            try {
                

            } catch (error) {

            }

        });
        const db = getFirestore()
        onMounted(async () => {

        })
        const infoSubmit = async () => {
            disableb.value = true
           
            disableb.value = false
           
        }
        const passSubmit = async () => {
            disableb.value = true
           
        }

       
        const edit = (id) => {
        }
        return {
            info, pass, disableb, infoSubmit, passSubmit
        }
    },
    methods: {


    },
}
</script>

<style scoped>
body {
    background: rgb(99, 39, 120)
}
h1,h2{
    font-weight: bold;
}
.form-control:focus {
    box-shadow: none;
    border-color: #BA68C8
}
button{
    width: max-content;
    height: 2em;
    text-align: center;
    padding: 1em 1em;
    background-color: #fff;
    font-size: large;
    font-weight: bold;
    pointer-events: fill;
    
}



button {
  align-items: center;
  background-clip: padding-box;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
 margin: 1em 2em;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

button:hover,
button:focus {
  background-color: #fb8332;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

button:hover {
  transform: translateY(-1px);
}

button:active {
  background-color: #c85000;
  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
  transform: translateY(0);
}
.profile-button {
    background: rgb(99, 39, 120);
    box-shadow: none;
    border: none
}

.profile-button:hover {
    background: #682773
}

.profile-button:focus {
    background: #682773;
    box-shadow: none
}

.profile-button:active {
    background: #682773;
    box-shadow: none
}

.back:hover {
    color: #682773;
    cursor: pointer
}



.add-experience:hover {
    background: #BA68C8;
    color: #fff;
    cursor: pointer;
    border: solid 1px #BA68C8
}

.labels {
    width: 20%;
    margin-right: 1em;
    font-weight: bolder;


}

.form-control {
    width: 80%;
    height: 4rem;
    padding: 1em;
    margin-right: 1em;
    font-weight: bolder;

}
</style>
