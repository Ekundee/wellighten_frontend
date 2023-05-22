import { Storage } from '@capacitor/storage';
import { Preferences }  from '@capacitor/preferences';

export const setPreference = async (name : string, value: any) => {
     await Preferences.set({ key: name, value: value});
};

export const checkPreference = async (name : string) => {
     const { value } = await Preferences.get({ key: name });
     console.log(`Hello ${value}!`);
     return value
};

export const removePreference = async (name: string) => {
     await Preferences.remove({ key: name });
}


export const setCapacitorStorageData =  async (name : string, value: string) => {
    Storage.set({ key: name, value: value });
}

export const getCapacitorStorageData = async (name : string) => {
    const {value} = await Storage.get({ key: name });
    return value
}