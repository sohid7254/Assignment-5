
# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? 
##  Ans:
##   `getElementById`
-একটি নির্দিষ্ট id দ্বারা HTML এলিমেন্ট নির্বাচন করে।
-Syntex:`document.getElementById("myName")` 
-ফলাফল: একটি Element অবজেক্ট, অথবা null।
-খুব দ্রুত কাজ করে, কারণ এটি একটি নির্দিষ্ট  ID অনুসন্ধান করে।
##  `getElementsByClassName`
-একটি নির্দিষ্ট ক্লাস নামের সব এলিমেন্ট নির্বাচন করে।
-Syntex: `document.getElementsByClassName("myClass")`
-যদি DOM (Document Object Model)-এ কোনো পরিবর্তন হয়, তাহলে সেই পরিবর্তনটি স্বয়ংক্রিয়ভাবে ওয়েব পৃষ্ঠায় আপডেট হয়ে যায়।এই প্রক্রিয়াটিই "DOM Manipulation" নামে পরিচিত।
-একটি live HTMLCollection বের করে
##  `querySelector`
-CSS সিলেক্টর ব্যবহার করে প্রথম মিল থাকা এলিমেন্ট নির্বাচন করে।
-Syntex: `document.querySelector("#myId")`
-ফলাফল: একটি Element অবজেক্ট বা null বের করে |
-CSS-এ প্রয়োজন অনুযায়ী বিভিন্ন ধরনের সিলেক্টর
 ব্যবহৃত হয় 
 ## `querySelectorAll`
 -CSS সিলেক্টর ব্যবহার করে সব মিল থাকা এলিমেন্ট নির্বাচন করে।
-একটি স্ট্যাটিক নোডলিস্ট আউটপুট বের করে
-Syntex: `document.querySelectorAll('selector')`

---

# 2. How to Create and Insert a New Element into the DOM.
## Ans:
<body>
<div id="container"></div>
<script>
    const newPara = document.createElement("p");
    newPara.textContent = "A new paragraph tag has been created";
    newPara.style.color = "green";

    const container = document.getElementById("container");
    container.appendChild(newPara);
</script>
</body>

# 3. What is Event Bubbling and how does it work?
## Ans:
ইভেন্ট বাবলিং হলো একটি জাভাস্ক্রিপ্ট ইভেন্ট হ্যান্ডলিং, যেখানে একটি ইভেন্ট প্রথমে যেই এলিমেন্টে ঘটেছে, সেখান থেকে শুরু করে তার উপরের সব প্যারেন্ট এলিমেন্টে ধাপে ধাপে ছড়িয়ে পড়ে। যদি একটি বাটনের উপর ক্লিক করেন, সেই ক্লিক ইভেন্টটি শুধু বাটনেই সীমাবদ্ধ থাকে না—তার প্যারেন্ট <div>, <body>, এমনকি document পর্যন্ত পৌঁছাতে পারে।
## এটি কীভাবে কাজ করে?
-ধরুন আপনি একটি বাটনে ক্লিক হলো।
-প্রথমে সেই বাটনেই ইভেন্ট হ্যান্ডল হয়।
-এরপর ইভেন্টটি তার প্যারেন্ট এলিমেন্টে যায়, তারপর তার প্যারেন্টে—এভাবে DOM-এর উপর দিকে যেতে থাকে।
-ইভেন্ট বাবলিং বন্ধ করতে এই কোড ব্যবহার করা যেতে পারে ( `event.stopPropagation()` )| 
-এটি ইভেন্ট ডেলিগেশন, কোড সহজ ও কার্যকর এর জন্য ব্যবহার করা হয় ।

## 4. What is Event Delegation in JavaScript? Why is it useful?

## Ans:
ইভেন্ট ডেলিগেশন মানে হলো— যদি অনেকগুলো বাটন বা আইটেম থাকে, তাদের প্রত্যেকটায় আলাদা করে ক্লিক ধরার কোড না লিখে, তাদের Parent এলিমেন্টে একটা কোড বসিয়ে দেওয়া হয় । তারপর যেই বাটন ক্লিক হয়, সেই ইভেন্ট উপরে গিয়ে ওই Parent ধরা পড়ে।

# 5. What is the difference between preventDefault() and stopPropagation() methods?

## Ans.
## 1. `preventDefault()`
-`preventDefault()`ব্রাউজারের স্বাভাবিক কাজ বন্ধ করে
-এটি ব্যবহার করলে ব্রাউজার যেই কাজটা সাধারণভাবে করে, সেটা আর করে না।
-যখন একটি লিংকে ক্লিক করা হয়, সাধারণভাবে ব্রাউজার সেই লিংকে চলে যায়। কিন্তু যদি উক্ত কোড ব্যবহার করা হয়, তাহলে লিংকে ক্লিক করলেও ব্রাউজার আর সেই পৃষ্ঠায় যায় না। ফর্ম সাবমিট বন্ধ করতে এবং লিংক ক্লিক বন্ধ করতে উক্ত কোডটি ব্যবহার করা হয়।

## 2. `stopPropagation()`
-stopPropagation() ইভেন্টটা উপরে ছড়ানো বন্ধ করে
-এটি ব্যবহার করলে ইভেন্ট আর DOM-এর উপরের দিকে (প্যারেন্ট এলিমেন্টে) যায় না।
-প্যারেন্টে ইভেন্ট না পৌঁছাতে চাইলে এটি ব্যবহার করা হয়।


