
<template>
    <div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div class="bg-white p-3 shadow rounded-lg md:col-span-2">
                <form>
                    <h2 class="text-xl font-semibold mb-2">Profile Details</h2>
                    <div class="grid grid-cols-2 gap-3 mb-3">
                        <input type="text" v-model="userDetailes.name" placeholder="First Name"
                            class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded" />

                    </div>
                    <div class="mb-3">
                        <input type="text"  v-model="userDetailes.email" placeholder="Your Email"
                            class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded" />
                    </div>
                    <div class="mb-3">
                        <input type="text"  value="" placeholder="Your Phone"
                            class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded" />
                    </div>

                    <h2 class="text-xl mt-6 font-semibold mb-2">Billing Address</h2>
                    <div class="grid grid-cols-2 gap-3 mb-3">
                        <div>
                            <input type="text" v-model="billing.adress1" placeholder="Address 1"
                                class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded" />
                        </div>
                        <div>
                            <input type="text" v-model="billing.adress2" placeholder="Address 2"
                                class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded" />
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-3 mb-3">
                        <div>
                            <input type="text" v-model="billing.city" placeholder="City"
                                class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded" />
                        </div>
                        <div>
                            <input type="text" v-model="billing.zibCode" placeholder="ZipCode"
                                class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded" />
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-3 mb-3">
                        <div>
                            <select v-model="userDetailes.country"
                                class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded">
                                <option value="">Select Country</option>

                            </select>
                        </div>
                        <div>
                               <div>
                            <select class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded">
                                <option value="">Select State</option>

                            </select>
                            <input type="text"  placeholder="State"
                                class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded" />
                        </div>

                        </div>
                    </div>

                    <div class="flex justify-between mt-6 mb-2">
                        <h2 class="text-xl font-semibold">Shipping Address</h2>
                        <label for="sameAsBillingAddress" class="text-gray-700">
                            <input @click="sameBilling" id="sameAsBillingAddress" type="checkbox"
                                class="text-purple-600 focus:ring-purple-600 mr-2"> Same as Billing
                        </label>
                    </div>
                    <div class="grid grid-cols-2 gap-3 mb-3">
                        <div>
                            <input type="text" v-model="shipping.adress1" placeholder="Address 1"
                                class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded" />
                        </div>
                        <div>
                            <input type="text" v-model="shipping.adress2" placeholder="Address 2"
                                class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded" />
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-3 mb-3">
                        <div>
                            <input type="text" v-model="shipping.city" placeholder="City"
                                class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded" />
                        </div>
                        <div>
                            <input v-model="shipping.zibCode" type="text" placeholder="ZipCode"
                                class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded" />
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-3 mb-3">
                        <div>
                            <select class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded">
                                <option value="">Select Country</option>
                                <template>
                                    <option></option>
                                </template>
                            </select>
                        </div>
                        <div>
                            <select class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded">
                                <option value="">Select State</option>

                            </select>
                            <input type="text" name="shipping[state]" placeholder="State"
                                class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded" />
                        </div>
                    </div>

                    <button class="btn btn-primary" @click.prevent="updateProfile">Update</button>
                </form>
            </div>
            <div class="bg-white p-3 shadow rounded-lg">
                <form action="" method="post">
                    <h2 class="text-xl font-semibold mb-2">Update Password</h2>
                    <div class="mb-3">
                        <input type="password" name="old_password" placeholder="Your Current Password"
                            class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded" />
                    </div>
                    <div class="mb-3">
                        <input type="password" name="new_password" placeholder="New Password"
                            class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded" />
                    </div>
                    <div class="mb-3">
                        <input type="password" name="new_password_confirmation" placeholder="Repeat New Password"
                            class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded" />
                    </div>
                    <x-button>Update</x-button>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
useHead({
    style: [
        {
            rel: 'stylesheet',
            href: 'https://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css',

        }
    ]
})
definePageMeta({
    middleware: ["auth"],
});
const user = useUser()
const { profileDetails } = useAuth()
const userDetailes = reactive({
    name: user.value.name,
    email: user.value.email,
    phone: '',

    country: '',


})
const billing = reactive({
    adress1: '',
    adress2: '',
    city: '',
    zibCode: '',
})

const shipping = reactive({
    adress1: '',
    adress2: '',
    city: '',
    zibCode: '',
})
const setshipping = ref(false)
const sameBilling = (() => {
    if (setshipping.value==true){
        setshipping.value=false
        console.log('jjjjj'+setshipping.value);
    }else if(setshipping.value==false){
        setshipping.value=true
         console.log('jjjjj'+setshipping.value);
    }

    if (setshipping.value === true) {
        shipping.adress1 = billing.adress1
        shipping.adress2 = billing.adress2
        shipping.city = billing.city
        shipping.zibCode = billing.zibCode
    } else
    if (setshipping.value === false) {
        shipping.adress1 = ''
        shipping.adress2 = ''
        shipping.city = ''
        shipping.zibCode = ''
    }

})
const { saveProfile } = useAuth()
const updateProfile=async()=>{
await saveProfile(shipping,billing)
}
watch(() => {
    userDetailes.name = user.value.name
        userDetailes.email = user.value.email
        shipping.adress1 = ''
        shipping.adress2 = ''
        shipping.city = ''
        shipping.zibCode = ''
})
onMounted(async () => {
    await profileDetails()
})
</script>
<style scoped ></style>
