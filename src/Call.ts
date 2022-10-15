import got, { HTTPError } from 'got';

export class Call {

    // HTTP invoker
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public async call(url: string, options: any): Promise<any> {

        const response = await got(url, options).json()
            .catch(err => {
                const error = {
                    'httpStatusCode' : (err as HTTPError).response.statusCode,
                    'msg' : (err as HTTPError).response.statusMessage
                };
                console.error(error);
                throw error;
            })
            .then((res: any) => {
                return res;
            });
        return response;
    }

    public async fetchToken(url: string, options: any){
        try {
            console.log(`Obtaining access token from ${url}`);
            const token = await this.call(url, options);
            console.log('Successfully fetched access token');
            return token;
        } catch (error) {
            console.error(error);
        }
    }
}