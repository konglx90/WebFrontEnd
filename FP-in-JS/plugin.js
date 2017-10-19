var items = [{
    promotion: { // may no exist
        by_day: 90,
        // may other by_month
    },
    charge_models: {
        by_day: 900,
    }
}]

// code 1 start
var i = 0;
if (items[i].promotion) {
    items[i].is_discount = true;
    if(items[i].promotion.by_day && items[i].promotion.by_day > 0){
        items[i].is_free = false;
        items[i].price = "<i>" + parseFloat(items[i].promotion.by_day)/100 + "</i><span>" + parseFloat(items[i].charge_models.by_day)/100 + "</span>";
        items[i].unit = "<b>快币/天</b>";
    }else if(items[i].promotion.by_month && items[i].promotion.by_month > 0){
        items[i].is_free = false;
        items[i].price = "<i>" + parseFloat(items[i].promotion.by_month)/100 + "</i><span>" + parseFloat(items[i].charge_models.by_month)/100 + "</span>";
        items[i].unit = "<b>快币/月</b>";
    }else if(items[i].promotion.forever && items[i].promotion.forever > 0){
        items[i].is_free = false;
        items[i].price = "<i>" + parseFloat(items[i].promotion.forever)/100 + "</i><span>" + parseFloat(items[i].charge_models.forever)/100 + "</span>";
        items[i].unit = "<b>快币/永久</b>";
    }else{
        items[i].is_discount = false;
        items[i].is_free = true;
        items[i].price = "免费";
        items[i].unit = "FREE";
    }
} else {
    items[i].is_discount = false;
    if(items[i].charge_models.by_day && items[i].charge_models.by_day > 0){
        items[i].is_free = false;
        items[i].price = parseFloat(items[i].charge_models.by_day)/100;
        items[i].unit = "快币/天";
    }else if(items[i].charge_models.daily_charge && items[i].charge_models.daily_charge > 0){
        items[i].is_free = false;
        items[i].price = parseFloat(items[i].charge_models.daily_charge)/100;
        items[i].unit = "快币/天";
    }else if(items[i].charge_models.by_month && items[i].charge_models.by_month > 0){
        items[i].is_free = false;
        items[i].price = parseFloat(items[i].charge_models.by_month)/100;
        items[i].unit = "快币/月";
    }else if(items[i].charge_models.forever && items[i].charge_models.forever > 0){
        items[i].is_free = false;
        items[i].price = parseFloat(items[i].charge_models.forever)/100;
        items[i].unit = "快币/永久";
    }else{
        items[i].is_free = true;
        items[i].price = "免费";
        items[i].unit = "FREE";
    }
}
console.log(items);

// 以上代码优点是清晰，不容易出bug (这点很重要)
// 1. 但是上面的代码样板代码太多 else 里面的代码抽象一下其实可以少不少代码 比下面还少
// 2. 不易拓展(其实实际操作起来还好，姑且当成一个缺点吧) 加一个by_year
// 3. 不易复用

// 对象保持一定的顺序
const CHARGE_TYPES_DICT = {
    by_day: '天',
    daily_charge: '天',
    by_month: '月',
    forever: '永久',
};

const CHARGE_TYPES = Object.keys(CHARGE_TYPES_DICT);

const discountType = item => item.promotion ? 'promotion' : 'charge_models';

const isNotFree = (item, dType, type) => !!(item && item[dType] && item[dType][type] && item[dType][type] !== 0);

const priceTemplate = (item, type) => {
    return item.promotion ?
    `<i>${parseFloat(item.promotion[type])/100}</i><span>${parseFloat(item.charge_models[type])/100}</span>` :
    parseFloat(item.charge_models[type])/100;
}

// 理论上讲以上部分是可以复用的

function main(item) {
    const dType = discountType(item);
    let newItem = CHARGE_TYPES
        .filter(type => isNotFree(item, discountType(item), type))
        .map(type => {
            return {
                // ...item,
                is_discount: dType === 'promotion',       // TODO to function
                is_free: true,
                price: priceTemplate(item, type),
                unit: `快币/${CHARGE_TYPES_DICT[type]}`,  // TODO to function
            }
        })
    return newItem.length === 0 ? {
        // ...newItem,
        is_free: true,
        price: "免费",
        unit: "FREE",
        is_discount: false,
    } :
    newItem;
}
console.log(main(items[0]), 'xx');
