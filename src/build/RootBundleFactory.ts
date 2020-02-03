import { CompositeFactory } from 'pip-services3-components-node';
import { FacadeFactory } from 'pip-services3-facade-node';
import { DefaultContainerFactory } from 'pip-services3-container-node';

// import { LoggingServiceFactory } from 'pip-services-logging-node';
import { LoggingClientFactory } from 'pip-clients-logging-node';
// import { PerfMonServiceFactory } from 'pip-services-perfmon-node';
import { PerfMonClientFactory } from 'pip-clients-perfmon-node';
import { EventLogServiceFactory } from 'pip-services-eventlog-node';
import { EventLogClientFactory } from 'pip-clients-eventlog-node';
// import { StatisticsServiceFactory } from 'pip-services-statistics-node';
import { StatisticsClientFactory } from 'pip-clients-statistics-node';
import { SettingsServiceFactory } from 'pip-services-settings-node';
import { SettingsClientFactory } from 'pip-clients-settings-node';

import { ActivitiesServiceFactory } from 'pip-services-activities-node';
import { ActivitiesClientFactory } from 'pip-clients-activities-node';
import { AccountsServiceFactory } from 'pip-services-accounts-node';
import { AccountsClientFactory } from 'pip-clients-accounts-node';
import { EmailServiceFactory } from 'pip-services-email-node';
import { EmailClientFactory } from 'pip-clients-email-node';
import { SmsServiceFactory } from 'pip-services-sms-node';
import { SmsClientFactory } from 'pip-clients-sms-node';
import { EmailSettingsServiceFactory } from 'pip-services-emailsettings-node';
import { EmailSettingsClientFactory } from 'pip-clients-emailsettings-node';
import { SmsSettingsServiceFactory } from 'pip-services-smssettings-node';
import { SmsSettingsClientFactory } from 'pip-clients-smssettings-node';
import { MessageDistributionServiceFactory } from 'pip-services-msgdistribution-node';
import { MessageDistributionClientFactory } from 'pip-clients-msgdistribution-node';
import { PasswordsServiceFactory } from 'pip-services-passwords-node';
import { PasswordsClientFactory } from 'pip-clients-passwords-node';
import { SessionsServiceFactory } from 'pip-services-sessions-node';
import { SessionsClientFactory } from 'pip-clients-sessions-node';
import { RolesServiceFactory } from 'pip-services-roles-node';
import { RolesClientFactory } from 'pip-clients-roles-node';

import { BlobsServiceFactory } from 'pip-services-blobs-node';
import { BlobsClientFactory } from 'pip-clients-blobs-node';
import { AttachmentsServiceFactory } from 'pip-services-attachments-node';
import { AttachmentsClientFactory } from 'pip-clients-attachments-node';
import { ApplicationsServiceFactory } from 'pip-services-applications-node';
import { ApplicationsClientFactory } from 'pip-clients-applications-node';
import { TipsServiceFactory } from 'pip-services-tips-node';
import { TipsClientFactory } from 'pip-clients-tips-node';
import { GuidesServiceFactory } from 'pip-services-guides-node';
import { GuidesClientFactory } from 'pip-clients-guides-node';
import { HelpServiceFactory } from 'pip-services-help-node';
import { HelpClientFactory } from 'pip-clients-help-node';
import { ImageSetsServiceFactory } from 'pip-services-imagesets-node';
import { ImageSetsClientFactory } from 'pip-clients-imagesets-node';
import { DashboardsServiceFactory } from 'pip-services-dashboards-node';
import { DashboardsClientFactory } from 'pip-clients-dashboards-node';
import { MessageTemplatesServiceFactory } from 'pip-services-msgtemplates-node';
import { MessageTemplatesClientFactory } from 'pip-clients-msgtemplates-node';

import { AnnouncementsServiceFactory } from 'pip-services-announcements-node';
import { AnnouncementsClientFactory } from 'pip-clients-announcements-node';
import { FeedbacksServiceFactory } from 'pip-services-feedbacks-node';
import { FeedbacksClientFactory } from 'pip-clients-feedbacks-node';

import { CreditCardsServiceFactory } from 'pip-services-creditcards-node';
import { CreditCardsClientFactory } from 'pip-clients-creditcards-node';

import { ClustersServiceFactory } from 'pip-services-clusters-node';
import { ClustersClientFactory } from 'pip-clients-clusters-node';
import { OrganizationsServiceFactory } from 'pip-services-organizations-node';
import { OrganizationsClientFactory } from 'pip-clients-organizations-node';
import { ServiceAgreementsServiceFactory } from 'iqs-services-agreements-node';
import { ServiceAgreementsClientFactory } from 'iqs-clients-agreements-node';
import { ObjectGroupsServiceFactory } from 'iqs-services-objectgroups-node';
import { ObjectGroupsClientFactory } from 'iqs-clients-objectgroups-node';
import { LocationsServiceFactory } from 'iqs-services-locations-node';
import { LocationsClientFactory } from 'iqs-clients-locations-node';
import { ControlObjectsServiceFactory } from 'iqs-services-controlobjects-node';
import { ControlObjectsClientFactory } from 'iqs-clients-controlobjects-node';
import { DataProfilesServiceFactory } from 'iqs-services-dataprofiles-node';
import { DataProfilesClientFactory } from 'iqs-clients-dataprofiles-node';
import { DeviceProfilesServiceFactory } from 'iqs-services-deviceprofiles-node';
import { DeviceProfilesClientFactory } from 'iqs-clients-deviceprofiles-node';
import { DeviceConfigsServiceFactory } from 'iqs-services-deviceconfigs-node';
import { DeviceConfigsClientFactory } from 'iqs-clients-deviceconfigs-node';
import { DevicesServiceFactory } from 'iqs-services-devices-node';
import { DevicesClientFactory } from 'iqs-clients-devices-node';
import { EventTemplatesServiceFactory } from 'iqs-services-eventtemplates-node';
import { EventTemplatesClientFactory } from 'iqs-clients-eventtemplates-node';
import { ResolutionsServiceFactory } from 'iqs-services-resolutions-node';
import { ResolutionsClientFactory } from 'iqs-clients-resolutions-node';
import { GatewaysServiceFactory } from 'iqs-services-gateways-node';
import { GatewaysClientFactory } from 'iqs-clients-gateways-node';
import { ZonesServiceFactory } from 'iqs-services-zones-node';
import { ZonesClientFactory } from 'iqs-clients-zones-node';
import { BeaconsServiceFactory } from 'pip-services-beacons-node';
import { BeaconsClientFactory } from 'pip-clients-beacons-node';
import { EventRulesServiceFactory } from 'iqs-services-eventrules-node';
import { EventRulesClientFactory } from 'iqs-clients-eventrules-node';
import { ShiftsServiceFactory } from 'iqs-services-shifts-node';
import { ShiftsClientFactory } from 'iqs-clients-shifts-node';
import { EmergencyPlansServiceFactory } from 'iqs-services-emergencyplans-node';
import { EmergencyPlansClientFactory } from 'iqs-clients-emergencyplans-node';
import { InvitationsServiceFactory } from 'pip-services-invitations-node';
import { InvitationsClientFactory } from 'pip-clients-invitations-node';
import { OrgRolesServiceFactory as RolesServiceFactory2 } from 'pip-services-orgroles-node';
import { OrgRolesClientFactory as RolesClientFactory2 } from 'pip-clients-orgroles-node';

// import { CurrentObjectStatesServiceFactory } from 'iqs-services-currobjectstates-node';
import { CurrentObjectStatesClientFactory } from 'iqs-clients-currobjectstates-node';
// import { CurrentDeviceStatesServiceFactory } from 'iqs-services-currdevicestates-node';
import { CurrentDeviceStatesClientFactory } from 'iqs-clients-currdevicestates-node';
// import { RostersServiceFactory } from 'iqs-services-rosters-node';
import { RostersClientFactory } from 'iqs-clients-rosters-node';
// import { SignalsServiceFactory } from 'iqs-services-signals-node';
import { SignalsClientFactory } from 'iqs-clients-signals-node';
// import { CorrectionsServiceFactory } from 'iqs-services-corrections-node';
import { CorrectionsClientFactory } from 'iqs-clients-corrections-node';
// import { EventGenerationServiceFactory } from 'iqs-services-eventgeneration-node';
import { EventGenerationClientFactory } from 'iqs-clients-eventgeneration-node';
// import { RouteAnalysisServiceFactory } from 'pip-services-routeanalysis-node';
import { RouteAnalysisClientFactory } from 'pip-clients-routeanalysis-node';
// import { StateUpdatesServiceFactory } from 'iqs-services-stateupdates-node';
import { StateUpdatesClientFactory } from 'iqs-clients-stateupdates-node';
// import { RestGatewayServiceFactory } from 'iqs-services-restgateway-node';
import { RestGatewayClientFactory } from 'iqs-clients-restgateway-node';
// import { MqttGatewayServiceFactory } from 'iqs-services-mqttgateway-node';
import { MqttGatewayClientFactory } from 'iqs-clients-mqttgateway-node';
// import { TeltonikaGatewayServiceFactory } from 'iqs-services-teltonikagateway-node';

// import { OperationalEventsServiceFactory } from 'iqs-services-opevents-node';
import { OperationalEventsClientFactory } from 'iqs-clients-opevents-node';
// import { IncidentsServiceFactory } from 'iqs-services-incidents-node';
import { IncidentsClientFactory } from 'iqs-clients-incidents-node';
// import { TransducerDataServiceFactory } from 'pip-services-transducerdata-node';
import { TransducerDataClientFactory } from 'pip-clients-transducerdata-node';
// import { PositionsServiceFactory } from 'pip-services-positions-node';
import { PositionsClientFactory } from 'pip-clients-positions-node';
// import { ObjectStatesServiceFactory } from 'iqs-services-objectstates-node';
import { ObjectStatesClientFactory } from 'iqs-clients-objectstates-node';
// import { RoutesServiceFactory } from 'pip-services-routes-node';
import { RoutesClientFactory } from 'pip-clients-routes-node';
// import { AttendanceServiceFactory } from 'iqs-services-attendance-node';
import { AttendanceClientFactory } from 'iqs-clients-attendance-node';
import { StatisticsClientFactory as OrganizationStatisticsClientFactory } from 'iqs-clients-statistics-node';

import { CloudwatchServiceFactory } from 'iqs-services-cloudwatch-node';
import { CloudwatchClientFactory } from 'iqs-clients-cloudwatch-node';

import { InfrastructureFacadeFactory } from 'pip-facade-infrastructure-node';
import { UsersFacadeFactory } from 'pip-facade-users-node';
import { ContentFacadeFactory } from 'pip-facade-content-node';
import { SupportFacadeFactory } from 'pip-facade-support-node';
import { ECommerceFacadeFactory } from 'pip-facade-ecommerce-node';

import { RootBundleServiceFactory } from './RootBundleServiceFactory';

export class RootBundleFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new FacadeFactory);
        this.add(new InfrastructureFacadeFactory);
        this.add(new UsersFacadeFactory);
        this.add(new ContentFacadeFactory);
        this.add(new SupportFacadeFactory);
        this.add(new ECommerceFacadeFactory);
        this.add(new RootBundleServiceFactory());

        // this.add(new LoggingServiceFactory);
        this.add(new LoggingClientFactory);
        // this.add(new PerfMonServiceFactory);
        this.add(new PerfMonClientFactory);
        this.add(new EventLogServiceFactory);
        this.add(new EventLogClientFactory);
        // this.add(new StatisticsServiceFactory);
        this.add(new StatisticsClientFactory);
        this.add(new SettingsServiceFactory);
        this.add(new SettingsClientFactory);


        this.add(new ActivitiesServiceFactory);
        this.add(new ActivitiesClientFactory);
        this.add(new AccountsServiceFactory);
        this.add(new AccountsClientFactory);
        this.add(new EmailServiceFactory);
        this.add(new EmailClientFactory);
        this.add(new SmsServiceFactory);
        this.add(new SmsClientFactory);
        this.add(new EmailSettingsServiceFactory);
        this.add(new EmailSettingsClientFactory);
        this.add(new SmsSettingsServiceFactory);
        this.add(new SmsSettingsClientFactory);
        this.add(new MessageDistributionServiceFactory);
        this.add(new MessageDistributionClientFactory);
        this.add(new PasswordsServiceFactory);
        this.add(new PasswordsClientFactory);
        this.add(new SessionsServiceFactory);
        this.add(new SessionsClientFactory);
        this.add(new RolesServiceFactory);
        this.add(new RolesClientFactory);

        this.add(new BlobsServiceFactory);
        this.add(new BlobsClientFactory);
        this.add(new AttachmentsServiceFactory);
        this.add(new AttachmentsClientFactory);
        this.add(new ApplicationsServiceFactory);
        this.add(new ApplicationsClientFactory);
        this.add(new TipsServiceFactory);
        this.add(new TipsClientFactory);
        this.add(new GuidesServiceFactory);
        this.add(new GuidesClientFactory);
        this.add(new HelpServiceFactory);
        this.add(new HelpClientFactory);
        this.add(new ImageSetsServiceFactory);
        this.add(new ImageSetsClientFactory);
        this.add(new DashboardsServiceFactory);
        this.add(new DashboardsClientFactory);
        this.add(new MessageTemplatesServiceFactory);
        this.add(new MessageTemplatesClientFactory);

        this.add(new AnnouncementsServiceFactory);
        this.add(new AnnouncementsClientFactory);
        this.add(new FeedbacksServiceFactory);
        this.add(new FeedbacksClientFactory);

        this.add(new CreditCardsServiceFactory);
        this.add(new CreditCardsClientFactory);
        
        this.add(new ClustersServiceFactory);
        this.add(new ClustersClientFactory);
        this.add(new OrganizationsServiceFactory);
        this.add(new OrganizationsClientFactory);
        this.add(new ServiceAgreementsServiceFactory);
        this.add(new ServiceAgreementsClientFactory);
        this.add(new LocationsServiceFactory);
        this.add(new LocationsClientFactory);
        this.add(new ObjectGroupsServiceFactory);
        this.add(new ObjectGroupsClientFactory);
        this.add(new ControlObjectsServiceFactory);
        this.add(new ControlObjectsClientFactory);
        this.add(new DataProfilesServiceFactory);
        this.add(new DataProfilesClientFactory);
        this.add(new DeviceProfilesServiceFactory);
        this.add(new DeviceProfilesClientFactory);
        this.add(new DeviceConfigsServiceFactory);
        this.add(new DeviceConfigsClientFactory);
        this.add(new DevicesServiceFactory);
        this.add(new DevicesClientFactory);
        this.add(new EventTemplatesServiceFactory);
        this.add(new EventTemplatesClientFactory);
        this.add(new ResolutionsServiceFactory);
        this.add(new ResolutionsClientFactory);
        this.add(new GatewaysServiceFactory);
        this.add(new GatewaysClientFactory);
        this.add(new ZonesServiceFactory);
        this.add(new ZonesClientFactory);
        this.add(new BeaconsServiceFactory);
        this.add(new BeaconsClientFactory);
        this.add(new EventRulesServiceFactory);
        this.add(new EventRulesClientFactory);
        this.add(new ShiftsServiceFactory);
        this.add(new ShiftsClientFactory);
        this.add(new EmergencyPlansServiceFactory);
        this.add(new EmergencyPlansClientFactory);
        this.add(new InvitationsServiceFactory);
        this.add(new InvitationsClientFactory);
        this.add(new RolesServiceFactory2);
        this.add(new RolesClientFactory2);

        // this.add(new CurrentObjectStatesServiceFactory);
        this.add(new CurrentObjectStatesClientFactory);
        // this.add(new CurrentDeviceStatesServiceFactory);
        this.add(new CurrentDeviceStatesClientFactory);
        // this.add(new IncidentsServiceFactory);
        this.add(new IncidentsClientFactory);
        // this.add(new RostersServiceFactory);
        this.add(new RostersClientFactory);
        // this.add(new SignalsServiceFactory);
        this.add(new SignalsClientFactory);
        // this.add(new CorrectionsServiceFactory);
        this.add(new CorrectionsClientFactory);
        // this.add(new EventGenerationServiceFactory);
        this.add(new EventGenerationClientFactory);
        // this.add(new RouteAnalysisServiceFactory);
        this.add(new RouteAnalysisClientFactory);
        // this.add(new StateUpdatesServiceFactory);
        this.add(new StateUpdatesClientFactory);
        // this.add(new RestGatewayServiceFactory);
        this.add(new RestGatewayClientFactory);
        // this.add(new MqttGatewayServiceFactory());
        this.add(new MqttGatewayClientFactory);
        // this.add(new TeltonikaGatewayServiceFactory());

        // this.add(new OperationalEventsServiceFactory);
        this.add(new OperationalEventsClientFactory);
        // this.add(new TransducerDataServiceFactory);
        this.add(new TransducerDataClientFactory);
        // this.add(new PositionsServiceFactory);
        this.add(new PositionsClientFactory);
        // this.add(new ObjectStatesServiceFactory);
        this.add(new ObjectStatesClientFactory);
        // this.add(new RoutesServiceFactory);
        this.add(new RoutesClientFactory);
        // this.add(new AttendanceServiceFactory);
        this.add(new AttendanceClientFactory);
        this.add(new OrganizationStatisticsClientFactory);

        this.add(new CloudwatchServiceFactory);
        this.add(new CloudwatchClientFactory);
    }

}