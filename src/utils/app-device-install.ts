
//import { appStore } from '/store'

export const appDeviceInstall = () => {
    // @ts-ignore
    const { standalone } = window.navigator
    const isIosOnBrowser = [
        'iPhone',
        'iPad',
        'iPod'
    ].includes(navigator.platform) && !standalone

    if (isIosOnBrowser) {
        const now = Date.now()
        let limitDate = new Date()
        const lastAddDate = localStorage.getItem('addToHomeIosPromptLastDate')
        const addToHomeIosPromptLastDate: string = lastAddDate ? lastAddDate : limitDate.toDateString()

        if (addToHomeIosPromptLastDate) {
            limitDate = new Date(parseInt(addToHomeIosPromptLastDate))
            limitDate.setMonth(limitDate.getMonth() + 1)
        }

        if ((limitDate && now >= limitDate.getTime()) || limitDate) {
         //   appStore.setShowAddToHomeScreen(true)
        }
    }
}

