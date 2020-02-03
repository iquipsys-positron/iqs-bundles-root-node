export declare class AuthManagerV1 {
    private basicAuth;
    private roleAuth;
    private ownerAuth;
    anybody(): (req: any, res: any, next: () => void) => void;
    signed(): (req: any, res: any, next: () => void) => void;
    owner(idParam?: string): (req: any, res: any, next: () => void) => void;
    ownerOrAdmin(idParam?: string): (req: any, res: any, next: () => void) => void;
    organizationRoles(roles: string[], idParam?: string): (req: any, res: any, next: () => void) => void;
    admin(): (req: any, res: any, next: () => void) => void;
    organizationAdmin(idParam?: string): (req: any, res: any, next: () => void) => void;
    organizationManager(idParam?: string): (req: any, res: any, next: () => void) => void;
    organizationUser(idParam?: string): (req: any, res: any, next: () => void) => void;
    organizationAdminOrOwner(userIdParam?: string, orgIdParam?: string): (req: any, res: any, next: () => void) => void;
}
