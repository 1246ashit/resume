import winNexus from './Icon/winNexus.jpg';
import jobSearch104 from './Icon/104-Logo.png';
import LinkIn from './Icon/LinkedIn_icon.png';

export const projects = [
    {
        name: '大學專題-居家安全辨識警示系統',
        description: '使用了Python 程式語言並且導入AI深度學習影像辨識模組例如:Yolo、DeepFace來搭建安全辨識系統，當有異常發生時，能即時透過Line BOT送出警報，而後端的歷史紀錄是透過MSSQL建置資料庫並且使用Python Flask 以MVC的架構搭建網頁讓使用者可以查看或是操作。在整個過程中遇上了不少困難，其中像是模組的問題，導致開發困難，或是組員因為對系統的架構理解有誤，導致工作有所延誤。幸虧透過我與組員和指導老師一次次討論、教學，最後在專題發表會裡獲得評審老師的好評。這對我來說是非常有意義的經驗，透過這次的專題設計過程，也讓我學習到團隊合作跟溝通的重要性。',
        link: 'https://github.com/1246ashit/firebaseForPython',
        video: 'https://www.youtube.com/embed/M7aaMpp_UMM?si=o-L0QBFpaQvLV6vp',
        color:"bg-gray-400"
    },
    {
        name: '實習 北捷採購網開發',
        description: '這個專案裡面，使用了C# .NET 、jQuery跟Ajax來開發。我要配合其他工程師前輩開發的功能，把這些小功能組合成比較完整的功能項目(子功能)。在這過程中，因為程式碼大部分是既有的，因此我需要閱讀大量前期留下的程式碼，一開始閱讀專業人士的程式碼，很多地方在理解跟概念上不是很熟，導致當時工作有很大的挑戰；幸好，當時的主管對我耐心的教導，我才能順利地將子功能推出，在此次經驗裡我學到專業人士他們對於程式架構的想法，還有設計流程，藉由這次的經驗，我對於程式設計的安排有更進一步的認知。',
        link: '',
        video: '',
        color:"bg-fuchsia-400"
    },
    {
        name: '短期工讀  資安設定自動化腳本開發助理',
        description:'在這次專案中，我使用了 bash 腳本自動化處理 Linux 的資安條例。這些腳本能夠自動配置並優化資安設定，確保系統符合標準。在這個過程中，我還學會了如何建立虛擬機器來測試腳本是否能正常運行。這次經驗不僅讓我對 bash 腳本和虛擬化有了初步了解，還提升了我在建立和管理環境方面的技能。這使我在面對未來的專案時，更有信心和能力去應對各種挑戰。',
        link: '',
        video: '',
        color:"bg-amber-400"
    }
];

export const experiences= [
    {
        name: '好時資訊股份有限公司 全端實習生',
        description: '協助北捷採購網開發',
        date:'Feb 2023 - Sep 2023',
        icon: '',
        icon2:'好' 
    },
    {
        name: '誠雲科技股份有限公司 工讀生',
        description: '協助資安設定自動化腳本開發',
        date:'Nov 2023 - Jan 2024',
        icon: winNexus,
        icon2:'誠'
    },
];


export const contectInfo=[
    {
        name: '104 人力銀行',
        link: 'https://pda.104.com.tw/profile/share/8sQg4yMLGY7jxDUqDMw3yeQkuk11KZGO',
        icon:jobSearch104,
    },
    {
        name: 'LinkIn',
        link: 'https://www.linkedin.com/in/俊杰-李-b40753262',
        icon:LinkIn,
    },
]
