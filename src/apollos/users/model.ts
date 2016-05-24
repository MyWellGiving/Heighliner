import crypto from "crypto";

import { MongoConnector } from "../../connectors/mongo";


export interface UserProfile {
  lastLogin: Date
}

export interface UserEmails {
  address: string
  verified: boolean
}

export interface UserLoginTokens {
  when: Date
  hashToken: string
}

export interface UserResume {
  loginTokens: [UserLoginTokens]
}

export interface UserRock {
  PersonId: number
  PrimaryAliasId: number
}

export interface UserPassword {
  bcrypt: string
}

export interface UserServices {
  password: UserPassword
  rock: UserRock
  resume: UserResume
}

export interface UserDocument {
  _id: string
  createdAt: Date
  services: UserServices
  emails: [UserEmails]
  profile: UserProfile
}


const schema: Object = {
  _id: String,
  createdAt: { type: Date, default: Date.now },
  services: {
    password: { bcrypt: String },
    rock: { PersonId: Number, PrimaryAliasId: Number },
    resume: {
      loginTokens: [{ when: Date, hashedToken: String }],
    },
  },
  emails: [{ address: String, verified: Boolean }],
  profile: { lastLogin: Date },
};

const Model = new MongoConnector("user", schema);

export class Users {
  private model: MongoConnector
  
  constructor() {
    this.model = Model;
  }

  async getByHashedToken(token: string): Promise<UserDocument> {

    let rawToken = token;

    // allow for client or server side auth calls
    token = crypto.createHash("sha256")
      .update(token)
      .digest("base64");

    return await this.model.findOne({
      $or: [
        { "services.resume.loginTokens.hashedToken": token },
        { "services.resume.loginTokens.hashedToken": rawToken },
      ],
    }) as UserDocument;
  }
}

export default {
  Users,
};