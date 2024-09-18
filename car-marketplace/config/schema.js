import { integer, json, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const CarListing = pgTable('carListing',{
    id:serial('id').primaryKey(),
    listingTitle:varchar('listingTitle').notNull(),
    tagline:varchar('tagline'),
    originalPrice:varchar('originalPrice'),
    sellingPrice:varchar('sellingPrice').notNull(),
    category:varchar('category').notNull(),
    condition:varchar('condition').notNull(),
    make:varchar('make').notNull(),
    model:varchar('model').notNull(),
    year:varchar('year').notNull(),
    driveType:varchar('driveType').notNull(),
    transmission:varchar('transmission').notNull(),
    fuelType:varchar('fuelType').notNull(),
    mileage:varchar('mileage').notNull(),
    engineSize:varchar('engineSize'),
    cylinder:varchar('cylinder'),
    color:varchar('color').notNull(),
    door:varchar('door').notNull(),
    vin:varchar('vin'),
    offerType:varchar('offerType'),
    listingDescription:varchar('listingDescription').notNull(),
    features:json('features'),
    createdBy:varchar('createdBy').notNull(),
    userName:varchar('userName').notNull().default('Thihara Kumarasinghe'),
    userImageUrl:varchar('userImageUrl').default('https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='),
    postedOn:varchar('postedOn')
    
    


})

export const carImages = pgTable('carImages',{
    id:serial('id').primaryKey(),
    carListingId:integer('carListingId').notNull().references(()=>CarListing.id),
    imageUrl:varchar('imageUrl').notNull(),
    
})