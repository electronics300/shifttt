import { users, type User, type InsertUser, waitlistEntries, type WaitlistEntry, type InsertWaitlistEntry } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createWaitlistEntry(entry: InsertWaitlistEntry): Promise<WaitlistEntry>;
  getWaitlistEntries(): Promise<WaitlistEntry[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlist: Map<number, WaitlistEntry>;
  currentUserId: number;
  currentWaitlistId: number;

  constructor() {
    this.users = new Map();
    this.waitlist = new Map();
    this.currentUserId = 1;
    this.currentWaitlistId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createWaitlistEntry(insertEntry: InsertWaitlistEntry): Promise<WaitlistEntry> {
    const id = this.currentWaitlistId++;
    const entry: WaitlistEntry = { 
      ...insertEntry, 
      id,
      createdAt: new Date().toISOString() 
    };
    this.waitlist.set(id, entry);
    return entry;
  }

  async getWaitlistEntries(): Promise<WaitlistEntry[]> {
    return Array.from(this.waitlist.values());
  }
}

export const storage = new MemStorage();
