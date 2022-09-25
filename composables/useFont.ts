export const useFont = () => {
    const title = (print?: boolean, dense?: boolean) => {
        return {'body-2': print, 'text-h5': dense && print !== true, 'text-h4': dense === false && print !== true, 'mb-4': print !== true}
    };
    const date = (print?: boolean) => {
        return {'text-h5': print !== true, 'body-2': print === true}
    };
    const title2 = (print?: boolean) => {
        return {'text-h6': print !== true, 'body-2': print === true}
    };
 
    const subtitle = (print?: boolean) => {
        return {'text-h6': print !== true, 'mb-4': print !== true, 'text-subtitle-3': print === true}
    };
    const body = (print?: boolean) => {
        return {'text-subtitle-1': print !== true, 'text-subtitle-3': print === true}
    };


    const body2 = (print?: boolean) => {
        return {'text-subtitle-1': print !== true, 'text-subtitle-4': print === true}
    };

    return { title, title2, date, subtitle, body, body2 }
}