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