import { useGlobalStore } from '@/stores/globalStore';
const returnWholeSettingInfos = () => {
    const settingAllObj = {
        MessageID: 'SingalGUIMsgPurgeReq',
        MessageData: {
            DataList: [],
            BaseTime: ''
        }
    };
    const globalStore = useGlobalStore();
    settingAllObj.MessageData.BaseTime = globalStore.getDateTime();
    document.querySelectorAll('.settingRow').forEach(settingRow => {
        const msgArea = settingRow.querySelector('.msgArea');
        const TargetCommand = msgArea ? msgArea.innerText : '';
        const dataObj = { TargetCommand: TargetCommand };
        settingRow.querySelectorAll('input[type="text"]').forEach(inputDOM => {
            // console.log(inputDOM);
            const element = inputDOM;
            const className = element.className;
            const value = element.value;
            dataObj[className] = value;
        });
        settingRow.querySelectorAll('.TargetStatus').forEach((inputDOM, index) => {
            const element = inputDOM;
            const className = element.className;
            const value = element.value;
            if (index === 0) {
                dataObj[className] = [value];
            }
            else if (Array.isArray(dataObj[className])) {
                dataObj[className].push(value);
            }
        });
        settingAllObj.MessageData.DataList.push(dataObj);
    });
    // console.log(JSON.stringify(settingAllObj));
    // console.log(settingAllObj);
    return settingAllObj;
};
export default returnWholeSettingInfos;
//# sourceMappingURL=returnWholeSettingInfos.js.map