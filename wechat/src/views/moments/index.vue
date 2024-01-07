<template>
  <!-- 顶部 -->
  <span class="fixed w-full z-50" :class="data.showNavBar ? 'block' : 'hidden'">
    <van-nav-bar
      title="朋友圈"
      left-arrow
      class="!bg-slate-50"
      @click-left="onClickLeft"
      :style="{
        backgroundColor: `rgba(230, 230, 230,${data.bgOpacity}) !important`
      }"
    >
      <template #right>
        <van-icon name="photograph" size="18" />
      </template>
    </van-nav-bar>
  </span>

  <div class="relative h-80 w-ful">
    <!-- 背景图 -->
    <img
      src="https://pic3.zhimg.com/v2-f583a86251513cab0d3050e49ee34483_r.jpg"
      alt=""
      class="absolute w-full h-full object-cover"
    />
    <!-- 昵称，头像 -->
    <div class="absolute -bottom-4 right-4 flex">
      <text class="mr-2 text-black font-black">小黑子</text>
      <img src="https://tupian.qqw21.com/article/UploadPic/2021-3/202132022173036062.png"  alt="" style="width: 60px; height: auto;"/>
    </div>
  </div>

  <div class="p-10">
    <MomentsItem v-for="item in commentItemList" :item="item"/>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import MomentsItem from '@/components/MomentsItem.vue'


const router = useRouter()

const data = reactive({
  showNavBar: false,
  bgOpacity: 0,
  scrollTop: 0
})

const commentItemList = ref([])

const onClickLeft = () => router.back()

const getScrollTop = () => {
  data.scrollTop = window.pageYOffset
  if (data.scrollTop > 50) {
    data.showNavBar = true

    // 根据被卷去的高度调整背景透明度
    data.bgOpacity = (data.scrollTop - 100) / 10
  } else {
    data.showNavBar = false
  }
}

const loadMontents = () => [
  {
    user: { name: '小样', avatar: 'https://ts1.cn.mm.bing.net/th/id/R-C.44a04163fff09f22c9c948db14f8d35f?rik=aSLwnez5FeZbPQ&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f202003%2f26%2f1585192258111284.jpg&ehk=LIugC9N9Y1cHtTu6slaWHbg3G0bIckCFrr6qoVnOEKo%3d&risl=&pid=ImgRaw&r=0' },
    title: '新的一年继续努力',
    images: [
      'https://kbopping.com/wp-content/uploads/2020/12/IU_20.jpg',
      'https://noritter.com/upload/blogs/4942_1582004443.jpg',
      'https://pic4.zhimg.com/v2-58d935e0628a7b42bc6b8abbf2bbb6af_r.jpg',
      'https://tse3-mm.cn.bing.net/th/id/OIP-C.DyFkzu8_QHVw-NaWE54E-AHaNK?w=1080&h=1920&rs=1&pid=ImgDetMain'
    ],
    timestr: '3 分钟前',
    showReplyPanel: false,
    share: {},
    thumbsup: ['Guo 小爱', '原神','iu','李知恩'],
    replies: [
      { user: 'Guo 小爱', text: '你也喜欢iu哈!!!' },
      { user: '喵仔 zsy', text: 'iu实至名归哈' }
    ]
  },
  {
    user: { name: 'ikun', avatar: 'https://p.qqan.com/up/2021-4/16186268366081281.jpg' },
    title: '天气越来越冷，我的心也冷',
    images: [
      'https://pic1.zhimg.com/v2-ebbc569d3334d76a931f0d26bf3a23e1_r.jpg?source=1def8aca',
    ],
    timestr: '6 分钟前',
    showReplyPanel: false,
    share: {},
    thumbsup: ['Guo 小爱', '原神','学习','李知恩'],
    replies: [
      { user: 'Guo 小爱', text: '天气哥' },
      { user: '喵仔 zsy', text: '冷哥' }
    ]
  },
  {
    user: { name: '菜鸟', avatar: 'https://tupian.qqw21.com/article/UploadPic/2020-9/20209172232329657.jpg' },
    title: 'iu',
    images: [],
    timestr: '50 分钟前',
    showReplyPanel: false,
    share: {
      img: 'http://coding.imweb.io/img/p3/transition-hover.jpg',
      text: ' '
    },
   
    thumbsup: ['小v哦'],
    replies: []
  },
  {
    user: { name: '888', avatar: 'https://tupian.qqw21.com/article/UploadPic/2019-8/2019881731842915.jpeg' },
    title: '很好的色彩',
    images: [
      'https://tse4-mm.cn.bing.net/th/id/OIP-C.duz6S7Fvygrqd6Yj_DcXAQHaF7?rs=1&pid=ImgDetMain'
    ],
    timestr: '一小时前',
    showReplyPanel: false,
    share: {},
    thumbsup: [],
    replies: []
  },
  {
    user: { name: '喵仔咖啡', avatar: 'https://tupian.qqw21.com/article/UploadPic/2020-5/202053023163778079.jpg' },
    title: '以后的喝咖啡只喝星巴克',
    images: [],
    timestr: '2 小时前',
    showReplyPanel: false,
    share: {},
    thumbsup: [],
    replies: []
  },
  {
    user: { name: '菜鸟', avatar: 'https://th.bing.com/th/id/R.f3097c6bcd86b4c690689821b5806249?rik=aWCqlPUZA1WrQQ&riu=http%3a%2f%2fp0.itc.cn%2fq_70%2fimages03%2f20201127%2fccf78216c79345f882c31da0fa19ac67.jpeg&ehk=PtVOXxOUMpt6XVrBl8xz08eKoOGwdVvYzUjm1d8xqWM%3d&risl=&pid=ImgRaw&r=0' },
    title: '男孩必看的',
    images: [
      'https://ts1.cn.mm.bing.net/th/id/R-C.426a012c3ed9105b2883fb094de022d0?rik=FLTUNJORRO1TfA&riu=http%3a%2f%2fwx3.sinaimg.cn%2flarge%2f006DFKaTgy1fhgr13z3muj30xc1n6tn3.jpg&ehk=Pb4bB5k2bVa%2bO43iVmq09LxV0okBmV1jVtKjhy%2bdklc%3d&risl=&pid=ImgRaw&r=0',
      'https://ts1.cn.mm.bing.net/th/id/R-C.1029fec95e46ed3b215ca322843502f7?rik=SSN5MVs12NAQoA&riu=http%3a%2f%2ftu.yiwu.com.cn%2fdm%2fdmss%2f5.jpg&ehk=j7Z9LKHIqRQ%2fjC%2fUijvVDcBP4wxygjxfazF%2bVXdH6eI%3d&risl=&pid=ImgRaw&r=0',
      'https://ts1.cn.mm.bing.net/th/id/R-C.0019bfc85a9899d45d75a9f9f9cd35bb?rik=0V6hCET%2bYYQMyA&riu=http%3a%2f%2fpic.rmb.bdstatic.com%2f0019bfc85a9899d45d75a9f9f9cd35bb.jpeg&ehk=wUXLtNO1TpwmceSONsohBkq%2bxWiZrpzFt25nBY3yT18%3d&risl=&pid=ImgRaw&r=0',
      'https://ts1.cn.mm.bing.net/th/id/R-C.bbc550d75e61bcf8f457124abc8c4a12?rik=1s6x%2fl54KNckCA&riu=http%3a%2f%2fpuui.qpic.cn%2fvcover_vt_pic%2f0%2fmzc00200nc1cbum1615792624639%2f0&ehk=z8GpupAY3X3LGXF9p14cPtlT84l4Qy8WB0QKLmQCEcA%3d&risl=&pid=ImgRaw&r=0'
    ],
    timestr: '3 分钟前',
    showReplyPanel: false,
    share: {},
    thumbsup: ['小爱', '神盾局爱','割让给','李知恩','此处',],
    replies: [
      { user: 'Guo 小爱', text: '就在此刻，-位三年后的亿万富翁给我点了一个赞!!!' },
      { user: '喵仔 zsy', text: '开始以为是青铜，没想到是个王者' },
      { user: '向量', text: '开始以为是青铜，没想到是个王者' }
    ]
  }
]

onMounted(() => {
  window.addEventListener('scroll', getScrollTop)
  commentItemList.value = loadMontents()
  console.log(commentItemList.value)
})

onBeforeUnmount(() => window.removeEventListener('scroll', getScrollTop))
</script>
