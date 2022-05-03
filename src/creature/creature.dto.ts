type PictureDefinition = 
    {   pictureDescription: string,
        pictureURL: string
    };

export class Creature {
    name: string;

    pictures: PictureDefinition[];

    description: string; 

}